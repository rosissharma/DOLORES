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

    <p>Primary: {{ primary }}</p>
    <p>Secondary: {{ secondary }}</p>
    <p>Accent 1: {{ accent1 }}</p>
    <p>Accent 2: {{ accent2 }}</p>
    <p>Accent 3: {{ accent3 }}</p>
  </div>
</template>