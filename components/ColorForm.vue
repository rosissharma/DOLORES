<template>
  <!-- main form -->
  <div class="form-control pb-8 mx-10">
    <form @submit.prevent="handleSubmit" class="sm:w-[460px]">
      <div class="input-group">
        <input
          id="topic"
          type="text"
          placeholder="Describe your palette..."
          required
          v-model="topic"
          :disabled="loading"
          class="input input-bordered w-[240px] sm:w-full"
        />
        <button
          v-if="loading"
          :disabled="loading"
          class="btn btn-square loading"
        ></button>
        <button v-else type="submit" :disabled="loading" class="btn btn-square">
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
import { LogSnag } from "logsnag";

const config = useRuntimeConfig();

let topic;

let primaryColor;
let secondaryColor;
let accent1Color;
let accent2Color;
let accent3Color;

const loading = ref(false);

let handleSubmit = async () => {
  loading.value = true;
  //   navigateTo(`/palette/${topic}`);
  // let results = getColors(topic);
  // console.log("results from component: ", toRaw((await results).palette.value));
  //   console.log("results from component: ", (await results).palette);

  let { palette } = await getColors(topic);
  let generate_palette = toRaw(palette.value);
  // console.log("palette raw val: ", toRaw(palette.value));
  console.log("generated palette: ", generate_palette);

  // log topic to LogSnag
  // log(topic);

  primaryColor = generate_palette.primary;
  secondaryColor = generate_palette.secondary;
  accent1Color = generate_palette.accent1;
  accent2Color = generate_palette.accent2;
  accent3Color = generate_palette.accent3;

  function log(currentTopic) {
    // handle LogSnag
    const logsnag = new LogSnag({
      token: config.LOG_SNAG_KEY,
      project: "dolores",
    });
    logsnag.publish({
      channel: "color-generated",
      event: "Color Generated",
      description: `Topic: ${currentTopic}
    Primary: ${generate_palette.primary}
    Secondary: ${generate_palette.secondary}
    Accent1: ${generate_palette.accent1}
    Accent2: ${generate_palette.accent2}
    Accent3: ${generate_palette.accent3}`,
      icon: "🎨",
      notify: true,
    });
  }

  if (generate_palette !== undefined && generate_palette !== null) {
    loading.value = false;
    await navigateTo({
      path: `/palette/${topic}`,
      query: {
        primary: primaryColor,
        secondary: secondaryColor,
        accent1: accent1Color,
        accent2: accent2Color,
        accent3: accent3Color,
      },
    });
  } else {
    return;
  }
};
</script>