<script setup>
import { LogSnag } from "logsnag";

const config = useRuntimeConfig();

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

const onSubmit = async () => {
  loading.value = true;
  message.value = "";

  // log(topic.value);

  fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic: topic.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.body) {
        result.value = data.body.result;
        let extract = extractHexValues(result.value); //[ "#2A2A2A", "#4F4F4F", "#7F7F7F" ]

        primary.value = extract[0];
        secondary.value = extract[1];
        accent1.value = extract[2];
        accent2.value = extract[3];
        accent3.value = extract[4];
      } else {
        console.error("Response from server does not contain a body property");
      }
      loading.value = false;
      // topic.value = "";
    })

    .catch((error) => {
      console.error(error);
      message.value = "An error occurred";
      loading.value = false;
    });
};

function log(currentTopic) {
  // handle LogSnag
  const logsnag = new LogSnag({
    token: config.LOG_SNAG_KEY,
    project: "dolores",
  });
  logsnag.publish({
    channel: "color-generated",
    event: "Color Generated",
    description: `Topic: ${currentTopic}
    Primary: ${primary.value}
    Secondary: ${secondary.value}
    Accent1: ${accent1.value}
    Accent2: ${accent2.value}
    Accent3: ${accent3.value}`,
    icon: "🎨",
    notify: true,
  });
}
</script>

<template>
  <div class="grid place-items-center">
    <!-- main form -->
    <div class="form-control pb-8">
      <form @submit.prevent="onSubmit" class="sm:w-[460px]">
        <div class="input-group">
          <input
            id="topic"
            type="text"
            placeholder="Dolores, generate..."
            required
            v-model="topic"
            :disabled="loading"
            class="input input-bordered w-[240px] sm:w-full"
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

    <div v-if="!result && !loading">
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
    <!-- display the results -->
    <div v-else-if="result">
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
  </div>
</template>

<style scoped>
.title {
  @apply uppercase font-light;
}
</style>