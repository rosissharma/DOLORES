<script setup>
const topic = ref("");
const result = ref("");
const loading = ref(false);
const message = ref("");

// color types
const typePrimary = ref("Primary");
const typeSecondary = ref("Secondary");
const typeAccent = ref("Accent");

// set it to empty on production
let primary = ref("#ffb8c1");
let secondary = ref("#9BC3E4");
let accent1 = ref("#FBE7D0");
let accent2 = ref("#F3F3DD");
let accent3 = ref("#D0E6DF");
</script>

<template>
  <div class="grid place-items-center">
    <ColorForm />

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

    <!-- display while fetching data -->
    <div v-if="loading">
      <img src="../assets/img/pika.gif" alt="Pikachu Running" width="60" />
    </div>
    <!-- display fetched message -->
    <div v-else-if="message">
      {{ message }}
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply uppercase font-light;
}
</style>