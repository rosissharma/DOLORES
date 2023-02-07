<script setup>
const topic = ref("");
const result = ref("");
const loading = ref(false);
const message = ref("");

let primary = ref("#7664E9");
let secondary = ref("#A1D631");
let accent1 = ref("#D13939");
let accent2 = ref("#008080");
let accent3 = ref("#C93756");

const onSubmit = async () => {
  loading.value = true;
  message.value = "";

  fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic: topic.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log("data = ", data.body);
      if (data.body) {
        result.value = data.body.result;
        let extract = extractHexValues(result.value); //[ "#2A2A2A", "#4F4F4F", "#7F7F7F" ]

        primary.value = extract[0];
        secondary.value = extract[1];
        accent1.value = extract[2];
        accent2.value = extract[3];
        accent3.value = extract[4];

        // console.log(result.value); // {"primary": "#FF0000","secondary": "#FFCF00","accent1": "#FFA500"}
      } else {
        console.error("Response from server does not contain a body property");
      }
      loading.value = false;
      topic.value = "";
    })

    .catch((error) => {
      console.error(error);
      message.value = "An error occurred";
      loading.value = false;
    });
};

function extractHexValues(output) {
  return output.split(", ");
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="topic">Topic:</label>
      <input id="topic" v-model="topic" :disabled="loading" />
      <button type="submit" :disabled="loading">Generate</button>
    </form>

    <div v-if="loading">Loading...</div>
    <div v-else-if="message">
      {{ message }}
    </div>
    <div v-else-if="result">
      <pre>Result: {{ result }}</pre>
      <hr />
      <div id="primary-container" :style="{ backgroundColor: primary }">
        {{ primary }}
      </div>
      <div id="secondary-container" :style="{ backgroundColor: secondary }">
        {{ secondary }}
      </div>
      <div id="accent1-container" :style="{ backgroundColor: accent1 }">
        {{ accent1 }}
      </div>
      <div id="accent2-container" :style="{ backgroundColor: accent2 }">
        {{ accent2 }}
      </div>
      <div id="accent3-container" :style="{ backgroundColor: accent3 }">
        {{ accent3 }}
      </div>
    </div>
  </div>
</template>