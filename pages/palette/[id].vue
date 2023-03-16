<script setup>
const { id } = useRoute().params;

// color types
const typePrimary = ref("Primary");
const typeSecondary = ref("Secondary");
const typeAccent = ref("Accent");

const route = useRoute().query;
console.log("route: ", route);

let primary = route.primary;
let secondary = route.secondary;
let accent1 = route.accent1;
let accent2 = route.accent2;
let accent3 = route.accent3;
</script>


<template>
  <div class="grid place-items-center">
    <ColorForm />
    <h1 class="text-bold text-4xl text-center">🎨 {{ id }}</h1>

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
  </div>
</template>