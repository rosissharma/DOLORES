<template>
  <!-- main form -->
  <div class="form-control pb-8 mx-10">
    <form @submit.prevent="handleSubmit" class="sm:w-[460px]">
      <div class="input-group">
        <input
          id="topic"
          type="text"
          placeholder="Describe the palette you want..."
          required
          v-model="topic"
          class="input input-bordered w-full sm:w-full"
        />
        <button class="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
let topic;

let handleSubmit = async () => {
  const router = useRouter();
  //   navigateTo(`/palette/${topic}`);
  // let results = getColors(topic);
  // console.log("results from component: ", toRaw((await results).palette.value));
  //   console.log("results from component: ", (await results).palette);

  let { palette } = await getColors(topic);
  let generate_palette = toRaw(palette.value);
  // console.log("results from component: ", toRaw(palette.value));

  router.push({
    path: `/palette/${topic}`,
    query: {
      primary: generate_palette.primary,
      secondary: generate_palette.secondary,
      accent1: generate_palette.accent1,
      accent2: generate_palette.accent2,
      accent3: generate_palette.accent3,
    },
  });
};
</script>