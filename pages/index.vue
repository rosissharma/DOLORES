<script setup>
const topic = ref("");
const result = ref("");
const loading = ref(false);
const message = ref("");

// set it to empty on production
let primary = ref("#7664E9");
let secondary = ref("#A1D631");
let accent1 = ref("#D13939");
let accent2 = ref("#008080");
let accent3 = ref("#C93756");

const onSubmit = async () => {
  loading.value = true;
  message.value = "";

  fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic: topic.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log("data = ", data.body);
      if (data.body) {
        result.value = data.body.result;
        let extract = extractHexValues(result.value); //[ "#2A2A2A", "#4F4F4F", "#7F7F7F" ]

        primary.value = extract[0];
        secondary.value = extract[1];
        accent1.value = extract[2];
        accent2.value = extract[3];
        accent3.value = extract[4];

        // console.log(result.value); // {"primary": "#FF0000","secondary": "#FFCF00","accent1": "#FFA500"}
      } else {
        console.error("Response from server does not contain a body property");
      }
      loading.value = false;
      topic.value = "";
    })

    .catch((error) => {
      console.error(error);
      message.value = "An error occurred";
      loading.value = false;
    });
};
</script>

<template>
  <div class="mt-4 grid place-items-center">
    <!-- <form @submit.prevent="onSubmit">
      <label for="topic">Topic:</label>
      <input id="topic" v-model="topic" :disabled="loading" />
      <button type="submit" :disabled="loading">Generate</button>
    </form> -->

    <!-- main form -->
    <div class="form-control p-8">
      <form @submit.prevent="onSubmit">
        <div class="input-group">
          <input
            id="topic"
            type="text"
            placeholder="Search…"
            v-model="topic"
            :disabled="loading"
            class="input input-bordered w-full"
          />
          <button
            v-if="loading"
            :disabled="loading"
            class="btn btn-square loading"
          ></button>
          <button
            v-else
            type="submit"
            :disabled="loading"
            class="btn btn-square"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>

    <div
      id="result-container"
      class="grid grid-cols-1 sm:grid-cols-3 gap-4 relative"
    >
      <div id="primary-container">
        <span class="position absolute top-4 -left-10 rotate-90"
          >left text</span
        >
        <div
          id="primary"
          class="w-28 h-28 rounded-md"
          :style="{ backgroundColor: primary }"
        ></div>
        <button
          class="opacity-50"
          title="Copy to clipboard"
          @click="log(primary)"
        >
          {{ primary }} 0_0
        </button>
      </div>
      <div id="secondary-container">
        <div
          id="secondary"
          class="w-28 h-28 rounded-md"
          :style="{ backgroundColor: secondary }"
        ></div>
      </div>
      <div id="accent1-container">
        <div
          id="accent1"
          class="w-28 h-28 rounded-md"
          :style="{ backgroundColor: accent1 }"
        ></div>
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
    <!-- display the results -->
    <div v-else-if="result">
      <pre>Result: {{ result }}</pre>
      <hr />
      <h1>Generated Palette</h1>
      <div id="primary-container" :style="{ backgroundColor: primary }">
        {{ primary }}
      </div>
      <div id="secondary-container" :style="{ backgroundColor: secondary }">
        {{ secondary }}
      </div>
      <div id="accent1-container" :style="{ backgroundColor: accent1 }">
        {{ accent1 }}
      </div>
      <div id="accent2-container" :style="{ backgroundColor: accent2 }">
        {{ accent2 }}
      </div>
      <div id="accent3-container" :style="{ backgroundColor: accent3 }">
        {{ accent3 }}
      </div>
    </div>
  </div>
</template>