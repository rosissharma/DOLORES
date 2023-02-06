<script setup>
const animal = ref("");
const result = ref("");

const onSubmit = async () => {
  fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ animal: animal.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.body) {
        result.value = data.body.result;
      } else {
        console.error("Response from server does not contain a body property");
      }
    })

    .catch((error) => {
      console.error(error);
    });
};
</script>

<template>
  <div>
    replace 'animal' with 'topic'
    <form @submit.prevent="onSubmit">
      <label for="topic">Topic:</label>
      <input id="topic" v-model="topic" />
      <button type="submit">Submit</button>
    </form>
    <p v-if="result">Result: {{ result }}</p>
  </div>
</template>