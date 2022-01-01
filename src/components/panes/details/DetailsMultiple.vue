<script setup>
import { useStore } from "vuex";

import DetailsDelete from "./DetailsDelete.vue";

const store = useStore();
const state = store.state;
</script>
<template>
  <div class="flex flex-col h-full">
    <div class="flex-1">
      <div class="flex flex-col gap-1 p-4">
        <div
          v-for="image in state.details.imagesSelected"
          class="flex items-center flex-1 gap-2 overflow-hidden rounded dark:shadow-lg dark:bg-zinc-800 bg-zinc-100"
        >
          <figure>
            <img
              :src="`./../src/assets/images/${image}`"
              class="object-cover w-16 h-16"
            />
          </figure>
          <div class="flex justify-center flex-1 gap-1 text-white text-15">
            <button
              class="flex gap-2 bg-cyan-700 px-3 py-1.5 shadow-lg rounded hover:bg-cyan-800 items-center"
              @click="store.commit('details/imageSelectToggleMultiple', image)"
            >
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                />
              </svg>
              Avmarkera
            </button>
          </div>
        </div>
      </div>
    </div>
    <DetailsDelete />
  </div>
</template>
