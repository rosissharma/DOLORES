<template>
  <div>
    <div
      class="
        group
        sm:w-28
        h-full
        grid
        place-content-center
        transition
        ease-in-out
        delay-150
      "
      :style="{ backgroundColor: color }"
    >
      <button
        class="opacity-60 invisible group-hover:visible"
        @click="clipboard(color)"
      >
        {{ color }}
      </button>
    </div>
    <button @click="tint(color)">View Tints!</button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
  },
  methods: {
    tint(val) {
      let getTints = generateColors(val);
      let tints = getTints;
      console.log(tints);
    },
  },
};
</script>