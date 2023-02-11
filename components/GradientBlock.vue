<template>
  <div>
    {{ gradientColors }}
  </div>
</template>

<script>
export default {
  props: {
    gradientColors: {
      type: String,
    },
  },
};
</script>