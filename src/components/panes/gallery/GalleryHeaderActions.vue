<script setup>
import ButtonGeneral from "../../general/button/ButtonGeneral.vue";

import { useStore } from "vuex";

const store = useStore();
const state = store.state;
</script>
<template>
  <div class="flex justify-between gap-8 text-15">
    <div class="flex items-center">
      <div class="flex gap-2">
        <span class="dark:text-zinc-400 text-zinc-600">Sortering:</span>
        <span class="text-black dark:text-zinc-100">Inlagd, fallande</span>
      </div>
    </div>
    <div class="flex gap-2">
      <ButtonGeneral
        :class="{
          'dark:bg-zinc-900 bg-white': state.layout.imageLayout === 'large',
          'dark:hover:bg-zinc-700 hover:bg-zinc-300':
            state.layout.imageLayout !== 'large',
        }"
        @click="store.commit('layout/setImageLayout', 'large')"
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
            d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
          />
        </svg>
      </ButtonGeneral>
      <ButtonGeneral
        :class="{
          'dark:bg-zinc-900 bg-white': state.layout.imageLayout === 'medium',
          'dark:hover:bg-zinc-700 hover:bg-zinc-300':
            state.layout.imageLayout !== 'medium',
        }"
        @click="store.commit('layout/setImageLayout', 'medium')"
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
            d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z"
          />
        </svg>
      </ButtonGeneral>
      <ButtonGeneral
        :class="{
          'dark:bg-zinc-900 bg-white': state.layout.imageLayout === 'small',
          'dark:hover:bg-zinc-700 hover:bg-zinc-300':
            state.layout.imageLayout !== 'small',
        }"
        @click="store.commit('layout/setImageLayout', 'small')"
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
            d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"
          />
        </svg>
      </ButtonGeneral>
    </div>
  </div>
</template>
