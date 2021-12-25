<script setup>
import TabItems from "../../TabItems.vue";

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
  <div class="bg-zinc-900 w-[300px] text-zinc-300 h-full flex flex-col">
    <TabItems :tabs="['Information', 'Metadata']" />
    <button>
      <figure>
        <img
          :src="`./../src/assets/images/mountains-6118182_960_720.jpg`"
          class="object-cover aspect-square"
        />
      </figure>
    </button>
    <div
      class="
        px-8
        py-4
        text-sm
        grid grid-cols-[repeat(2,minmax(auto,1fr))]
        gap-x-2 gap-y-2
      "
    >
      <template v-for="item in data">
        <div class="font-bold text-left text-zinc-500">{{ item.label }}</div>
        <div>
          <div>{{ item.value }}</div>
        </div>
      </template>
    </div>
    <div class="p-4 mt-auto">
      <button
        class="flex items-center justify-center w-full gap-2 px-3 py-2 text-white bg-red-900 rounded  hover:bg-red-800"
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
  </div>
</template>
