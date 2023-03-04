<template>
  <div
    class="w-[27rem] sm:w-full h-52 rounded-lg shadow-lg relative sm:h-72 lg:h-96"
    :style="{ backgroundImage: createBackgroundString }"
  >
    <button
      class="btn btn-xs sm:btn-sm absolute rounded-lg shadow-lg top-3 right-3 z-10"
      @click="showCode = !showCode"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-3 h-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    </button>
    <div
      v-if="showCode"
      class="w-full h-full rounded-lg mockup-code bg-primary text-primary-content break-word"
    >
      <button
        class="btn btn-xs sm:btn-sm rounded-lg shadow-lg absolute top-3 right-12 sm:right-14"
        @click="copyCode(createBackgroundString)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3 h-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
          />
        </svg>
      </button>
      <div class="px-6">
        <code>{{ createBackgroundString }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gradientColors: {
      type: Array,
    },
    showCode: false,
  },
  computed: {
    createBackgroundString() {
      return `linear-gradient(278.36deg, ${this.gradientColors[0]}, ${this.gradientColors[1]}, ${this.gradientColors[2]})`;
    },
  },
};
</script>