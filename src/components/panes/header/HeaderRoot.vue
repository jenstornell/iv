<script setup>
import { useStore } from "vuex";

import ButtonGeneral from "../../general/button/ButtonGeneral.vue";

const store = useStore();
const state = store.state;
</script>
<template>
  <div class="flex dark:bg-zinc-900 bg-zinc-100">
    <figure class="w-[300px] px-8 py-4">
      <img
        :src="`./../src/assets/logo-inverted.png`"
        v-if="state.layout.mode === 'dark'"
      />
      <img :src="`./../src/assets/logo.png`" v-else />
    </figure>
    <div class="flex items-center flex-1 ml-8">
      <label
        class="flex gap-2 p-2 bg-white rounded shadow dark:bg-zinc-800 dark:text-zinc-300 focus-within:ring-2 ring-cyan-600"
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
            d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
          />
        </svg>
        <input
          class="bg-transparent focus:outline-none"
          type="text"
          placeholder="Sök filer..."
        />
      </label>
    </div>
    <div class="flex items-center mx-4 dark:text-zinc-400 text-15">
      <div class="flex gap-2 ml-auto">
        <ButtonGeneral
          class="dark:hover:bg-zinc-800 hover:bg-zinc-200"
          label="Importera"
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
              d="M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019zM13 13h3l-4-5-4 5h3v4h2v-4z"
            />
          </svg>
        </ButtonGeneral>
        <ButtonGeneral
          class="dark:hover:bg-zinc-800 hover:bg-zinc-200"
          label="Mörkt läge"
          v-if="state.layout.mode === 'light'"
          @click="store.commit('layout/setMode', 'dark')"
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
              d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
            />
          </svg>
        </ButtonGeneral>
        <ButtonGeneral
          class="dark:hover:bg-zinc-800 hover:bg-zinc-200"
          label="Ljust läge"
          v-if="state.layout.mode === 'dark'"
          @click="store.commit('layout/setMode', 'light')"
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
              d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
            />
          </svg>
        </ButtonGeneral>
        <ButtonGeneral
          class="dark:hover:bg-zinc-800 hover:bg-zinc-200"
          label="Inställningar"
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
              d="M5.334 4.545a9.99 9.99 0 0 1 3.542-2.048A3.993 3.993 0 0 0 12 3.999a3.993 3.993 0 0 0 3.124-1.502 9.99 9.99 0 0 1 3.542 2.048 3.993 3.993 0 0 0 .262 3.454 3.993 3.993 0 0 0 2.863 1.955 10.043 10.043 0 0 1 0 4.09c-1.16.178-2.23.86-2.863 1.955a3.993 3.993 0 0 0-.262 3.455 9.99 9.99 0 0 1-3.542 2.047A3.993 3.993 0 0 0 12 20a3.993 3.993 0 0 0-3.124 1.502 9.99 9.99 0 0 1-3.542-2.047 3.993 3.993 0 0 0-.262-3.455 3.993 3.993 0 0 0-2.863-1.954 10.043 10.043 0 0 1 0-4.091 3.993 3.993 0 0 0 2.863-1.955 3.993 3.993 0 0 0 .262-3.454zM13.5 14.597a3 3 0 1 0-3-5.196 3 3 0 0 0 3 5.196z"
            />
          </svg>
        </ButtonGeneral>
        <ButtonGeneral
          class="dark:hover:bg-zinc-800 hover:bg-zinc-200"
          label="Logga ut"
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
              d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5zm10-6l5-4-5-4v3H9v2h6v3z"
            />
          </svg>
        </ButtonGeneral>
      </div>
    </div>
  </div>
</template>
