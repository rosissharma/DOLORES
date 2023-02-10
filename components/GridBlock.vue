<template>
  <div class="text-center">
    <div
      v-if="!showTints"
      class="
        group
        w-18
        sm:w-32
        lg:w-44
        h-48
        sm:h-full
        grid
        place-content-center
        transition
        ease-in-out
        delay-150
      "
      :style="{ backgroundColor: color }"
    >
      <button
        class="
          opacity-60
          text-sm
          sm:text-xl
          uppercase
          font-bold
          mix-blend-difference
        "
        @click="clipboard(color)"
      >
        {{ color }}
      </button>
    </div>
    <template v-if="showTints">
      <div
        class="
          w-18
          h-[2.4rem]
          sm:w-32 sm:h-16
          lg:w-44 lg:h-16
          grid
          place-content-center
          transition
          ease-in-out
          delay-150
        "
        v-for="tint in tints"
        :key="tint"
        :style="{ backgroundColor: tint }"
      >
        <button
          class="text-sm sm:text-xl uppercase font-bold mix-blend-difference"
          @click="clipboard(tint)"
        >
          {{ tint }}
        </button>
      </div>
    </template>
    <button
      @click="toggleTints(color)"
      class="btn btn-xs sm:btn-sm rounded-full mt-1"
    >
      {{ showTints ? "🫣 TINTS!" : "👀 TINTS!" }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
  },
  data() {
    return {
      tints: [],
      showTints: false,
    };
  },
  methods: {
    toggleTints(val) {
      if (!this.showTints) {
        let getTints = generateColors(val);
        this.tints = getTints;
      }
      this.showTints = !this.showTints;
    },
  },
};
</script>