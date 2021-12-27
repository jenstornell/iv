<script setup>
import { useStore } from "vuex";

const store = useStore();
const state = store.state;
</script>
<template>
  <div
    class="flex flex-wrap gap-2"
    v-if="state.collection.categoriesSelected.length > 0"
  >
    <template v-for="category in state.collection.categoriesSelected">
      <button
        class="flex items-center gap-2 px-3 py-1 pr-2 text-white rounded shadow-lg  bg-cyan-700"
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
            d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2z"
          />
        </svg>
        {{ category }}
        <div
          class="p-1 rounded hover:bg-cyan-900"
          @click="store.commit('collection/categoryRemove', category)"
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
        </div>
      </button>
    </template>
  </div>
</template>
