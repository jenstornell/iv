<script setup>
import { useStore } from "vuex";

const store = useStore();
const state = store.state;
</script>
<template>
  <div class="px-4 pb-4">
    <button
      class="flex items-center justify-center w-full gap-2 px-3 py-2 text-white bg-red-800 rounded shadow-lg transition-fast hover:bg-red-900"
      @click="store.commit('details/imageRemoveSelected')"
    >
      <svg
        class="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm-8 5v6h2v-6H9zm4 0v6h2v-6h-2zM9 4v2h6V4H9z"
        />
      </svg>

      Ta bort
    </button>
  </div>
</template>
