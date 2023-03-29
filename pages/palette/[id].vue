<script setup>
const { id } = useRoute().params;

// color types
const typePrimary = ref("Primary");
const typeSecondary = ref("Secondary");
const typeAccent = ref("Accent");

const route = useRoute().query;
// console.log("route: ", route);

const url = useRoute().fullPath;
console.log("url: ", url);

let primary = route.primary;
let secondary = route.secondary;
let accent1 = route.accent1;
let accent2 = route.accent2;
let accent3 = route.accent3;

let shareLink = () => {
  navigator
    .share({
      title: `DOLORES | ${id}`,
      text: `${primary} ${secondary} ${accent1} ${accent2} ${accent3}`,
      url: `http://dolores-stage.netlify.app${url}`,
    })
    .then(() => console.log("Link shared successfully"))
    .catch((error) => console.log("Error sharing link:", error));
};
</script>


<template>
  <div class="grid place-items-center">
    <ColorForm />
    <section class="flex justify-between gap-2 w-[24rem] xl:w-[60rem]">
      <button
        class="btn btn-square focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        @click="() => $router.go(-1)"
        title="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      <h1 class="text-bold text-4xl text-center">🎨 {{ id }}</h1>

      <button
        class="btn btn-square rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        title="Share"
        @click="shareLink"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
          />
        </svg>
      </button>
    </section>

    <div>
      <div>
        <!-- title -->
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-gray-400 title">Triadic</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
        <!-- triadic color block -->
        <div
          class="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <!-- primary -->
          <TriadicBlock :color="primary" :colorType="typePrimary" />
          <!-- secondary -->
          <TriadicBlock :color="secondary" :colorType="typeSecondary" />
          <!-- accent -->
          <TriadicBlock :color="accent1" :colorType="typeAccent" />
        </div>
      </div>

      <!-- color grid block -->
      <div class="mt-6">
        <!-- title -->
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-gray-400 title">Grid</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
        <div class="h-52 flex gap-1 sm:h-80 sm:gap-4 mx-1">
          <GridBlock :color="primary" />
          <GridBlock :color="secondary" />
          <GridBlock :color="accent1" />
          <GridBlock :color="accent2" />
          <GridBlock :color="accent3" />
        </div>
      </div>

      <!-- gradient block -->
      <div class="my-10">
        <!-- title -->
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-gray-400 title">Gradient</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
        <div class="grid place-items-center">
          <GradientBlock :gradientColors="[primary, secondary, accent1]" />
        </div>
      </div>
    </div>
  </div>
</template>