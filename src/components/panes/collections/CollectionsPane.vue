<script setup>
import TabItems from "../../TabItems.vue";
import PaneCollectionFooterActions from "./PaneCollectionFooterActions.vue";

const folders = [
  "Animals",
  "Buildings",
  "Countries",
  "Drinks",
  "Entertainment",
  "Food",
  "Fordon",
  "Landscape",
  "Nature",
  "People",
  "Vehicle",
];
</script>
<template>
  <div class="w-[300px] bg-zinc-900">
    <TabItems />
    <!-- Pane -->
    <div class="px-2 py-4">
      <ul class="text-zinc-300">
        <li
          v-for="(folder, index) in folders"
          class="flex items-center pl-2 rounded select-none hover:bg-zinc-800"
        >
          <svg
            v-if="[0, 1, 5, 8, 9].includes(index)"
            class="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
            />
          </svg>
          <div v-else class="w-4"></div>
          <div class="ml-2">{{ folder }}</div>
        </li>
      </ul>
    </div>
    <PaneCollectionFooterActions />
  </div>
</template>
