<script setup>
import { useStore } from "vuex";

const store = useStore();
const state = store.state;
</script>
<template>
  <div class="px-4 pb-4">
    <button
      class="flex items-center justify-center w-full gap-2 px-3 py-2 text-white rounded shadow-lg bg-cyan-700 transition-fast hover:bg-cyan-800"
      @click="
        store.commit(
          'details/imageSelectToggleSingle',
          state.details.imagesSelected[0]
        )
      "
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
          d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
        />
      </svg>

      Avmarkera
    </button>
  </div>
</template>
