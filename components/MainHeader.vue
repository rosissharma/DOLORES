<template>
  <div class="flex justify-center p-8">
    <div class="grid place-items-center">
      <div class="text-5xl md:text-6xl">
        D<input
          type="color"
          class="color-swatch w-9 h-9 sm:w-11 sm:h-11"
          value="#ffb8c1"
        />L<input
          type="color"
          class="color-swatch w-9 h-9 sm:w-11 sm:h-11"
          value="#9bc3e4"
        />RES
      </div>
      <div class="text-gray-500">Your AI Color Generative Assistant</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.color-swatch {
  -webkit-appearance: none;
  padding: 0;
  border: none;
  border-radius: 100px;
  cursor: pointer;
}

::-webkit-color-swatch,
::-webkit-color-swatch-wrapper {
  border: none;
  border-radius: 100px;
  padding: 0;
}

::-moz-color-swatch {
  border: none;
  border-radius: 100px;
  padding: 0;
}
</style>