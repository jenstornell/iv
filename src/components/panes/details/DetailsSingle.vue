<script setup>
import { useStore } from "vuex";

import DetailsDelete from "./DetailsDelete.vue";
import DetailsDeselect from "./DetailsDeselect.vue";

const store = useStore();
const state = store.state;

const data = [
  {
    label: "ID",
    value: 8723,
  },
  {
    label: "Valv",
    value: "ImageVault",
  },
  {
    label: "Uppladdad",
    value: "2019-01-05, 10:32:14",
  },
  {
    label: "Uppladdare",
    value: "Jens Törnell",
  },
  {
    label: "Kategorier",
    value: "Buildings, Drinks, Food, People, Vehicle",
  },
  {
    label: "Avtal",
    value: "Mitt avtal",
  },
  {
    label: "Bredd",
    value: 1024,
  },
  {
    label: "Höjd",
    value: 768,
  },
  {
    label: "Filändelse",
    value: "webp",
  },
  {
    label: "Filstorlek",
    value: "769 kB",
  },
];
</script>
<template>
  <div class="flex flex-col h-full">
    <div class="flex-1">
      <div class="bg-zinc-900">
        <figure class="relative p-2 chess">
          <img
            :src="`./../src/assets/images/${
              state.details.imagesSelected[
                state.details.imagesSelected.length - 1
              ]
            }`"
            class="object-contain shadow-lg aspect-square"
          />
        </figure>
      </div>
      <div class="flex-1">
        <div
          class="flex-1 px-8 py-4 text-sm grid grid-cols-[repeat(2,minmax(auto,1fr))] gap-x-2 gap-y-2"
        >
          <template v-for="item in data">
            <div class="font-bold text-left text-zinc-500">
              {{ item.label }}
            </div>
            <div>
              <div>{{ item.value }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <DetailsDeselect />
    <DetailsDelete />
  </div>
</template>
