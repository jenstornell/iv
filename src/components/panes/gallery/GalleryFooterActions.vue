<script setup>
import ButtonGeneral from "../../general/button/ButtonGeneral.vue";

import { useStore } from "vuex";

const store = useStore();
const state = store.state;
</script>
<template>
  <div class="flex items-center justify-between">
    <div class="flex gap-2 py-2 text-15">
      <ButtonGeneral class="hover:bg-zinc-700" label="Publicera">
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 19h18v2H3v-2zm10-9v8h-2v-8H4l8-8 8 8h-7z" />
        </svg>
      </ButtonGeneral>
      <ButtonGeneral class="hover:bg-zinc-700" label="Ladda ner">
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z" />
        </svg>
      </ButtonGeneral>
      <ButtonGeneral class="hover:bg-zinc-700" label="Flytta">
        <svg
          class="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 13H4v-2h8V4l8 8-8 8z" />
        </svg>
      </ButtonGeneral>
      <ButtonGeneral class="hover:bg-zinc-700" label="Dela">
        <svg
          class="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z"
          />
        </svg>
      </ButtonGeneral>
      <ButtonGeneral class="hover:bg-zinc-700" label="Mer">
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          />
        </svg>
      </ButtonGeneral>
    </div>
    <div class="text-zinc-300 text-15">
      <div>
        {{ state.details.imagesSelected.length }} av
        {{ state.details.images.length }} fil<span
          v-if="state.details.imagesSelected.length > 1"
          >er</span
        >
        vald<span v-if="state.details.imagesSelected.length > 1">a</span>
      </div>
    </div>
  </div>
</template>
