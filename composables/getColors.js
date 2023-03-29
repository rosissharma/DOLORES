const result = ref("");
const loading = ref(false);
const message = ref("");

// set it to empty on production
let primary = ref("#ffb8c1");
let secondary = ref("#9BC3E4");
let accent1 = ref("#FBE7D0");
let accent2 = ref("#F3F3DD");
let accent3 = ref("#D0E6DF");

export default async function getColors(topic) {
    let palette = ref([]);
    await fetch("/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: topic }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.body) {
                result.value = data.body.result;
                let extract = extractHexValues(result.value); //[ "#2A2A2A", "#4F4F4F", "#7F7F7F" ]
                // console.log(extract);
                primary.value = extract[0];
                secondary.value = extract[1];
                accent1.value = extract[2];
                accent2.value = extract[3];
                accent3.value = extract[4];

                // const generated_palettes = [{ primary: primary.value }, { secondary: secondary.value }, { accent1: accent1.value }, { accent2: accent2.value }, { accent3: accent3.value }];
                const generated_palettes = { primary: primary.value, secondary: secondary.value, accent1: accent1.value, accent2: accent2.value, accent3: accent3.value };
                // palette.value.push(generated_palettes);
                palette.value = generated_palettes;
            } else {
                console.error("Response from server does not contain a body property");
            }
            loading.value = false;
            // topic.value = "";
        })
        .catch((error) => {
            console.error(error);
            message.value = "An error occurred";
            loading.value = false;
        });
    return { palette };
}