<template>
  <div class="flex justify-center p-8">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-[3.7rem] h-[3.7rem]"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
      />
    </svg>
    <div class="grid place-items-center">
      <div class="text-5xl md:text-6xl">
        D<input
          type="color"
          class="color-swatch w-9 h-9 sm:w-11 sm:h-11"
          value="#7664E9"
        />L<input
          type="color"
          class="color-swatch w-9 h-9 sm:w-11 sm:h-11"
          value="#7664E9"
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