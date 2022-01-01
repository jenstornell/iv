<script setup>
import TabItems from "../../general/tab/TabItems.vue";
import TabEmpty from "../../general/tab/TabEmpty.vue";
import DetailsSingle from "./DetailsSingle.vue";
import DetailsMultiple from "./DetailsMultiple.vue";
import { useStore } from "vuex";

const store = useStore();
const state = store.state;
</script>
<template>
  <div class="dark:bg-zinc-900 w-[300px] h-full flex flex-col bg-white">
    <TabItems
      :tabs="['Information', 'Metadata', 'API']"
      :active="state.layout.detailsTabSelected"
      @click-tab="store.commit('layout/setDetailsTabSelected', $event)"
    />
    <div class="flex flex-col flex-1 overflow-auto">
      <template v-if="state.layout.detailsTabSelected == 'Information'">
        <section
          class="flex-1"
          v-if="state.details.imagesSelected.length === 1"
        >
          <DetailsSingle />
        </section>
        <section
          class="flex-1"
          v-else-if="state.details.imagesSelected.length > 1"
        >
          <DetailsMultiple />
        </section>
        <section v-else>
          <div class="px-4 py-4 dark:text-zinc-200 text-15">
            Ingen bild vald. Håll nere CTRL när du klickar för att välja flera
            bilder.
          </div>
        </section>
      </template>
      <section v-else-if="state.layout.detailsTabSelected == 'API'">
        <div class="px-4 py-4 dark:text-zinc-200 text-15">
          <button
            class="bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 px-3 py-1.5 rounded hover:bg-zinc-300"
            @click="store.dispatch('layout/loadApiData')"
          >
            Hämta data från ett API
          </button>
          <div class="py-4" v-if="state.layout.apiLoading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="fill-current animate-spin"
            >
              <line x1="12" y1="2" x2="12" y2="6"></line>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>
          </div>

          <div
            v-if="state.layout.apiResponse && state.layout.apiSuccess"
            class="flex flex-col gap-2 mt-4"
          >
            <div v-for="item in state.layout.apiResponse" class="flex gap-2">
              <div>{{ item.id }}</div>
              <div>{{ item.name }}</div>
            </div>
          </div>
          <div
            v-else-if="!state.layout.apiSuccess"
            class="px-3 py-1.5 mt-4 text-red-800 bg-red-200 rounded dark:bg-red-900 dark:text-white"
          >
            Hoppsan! Någonting blev fel. Prova igen lite senare.
          </div>
          <button
            v-if="state.layout.apiResponse"
            class="bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 px-3 py-1.5 rounded hover:bg-zinc-300 mt-4"
            @click="store.commit('layout/setApiData', '')"
          >
            Rensa data
          </button>
        </div>
      </section>
      <section v-else>
        <TabEmpty />
      </section>
    </div>
  </div>
</template>
