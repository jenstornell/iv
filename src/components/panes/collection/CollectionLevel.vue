<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  level: String,
});

const store = useStore();
const state = store.state;
</script>
<template>
  <li
    v-for="category in store.getters['collection/categoriesByParent'](level)"
    class="flex flex-col rounded select-none"
  >
    <div class="flex items-center my-px">
      <button
        class="py-1.5 px-1 dark:hover:bg-zinc-800 hover:bg-zinc-200 rounded transition-fast"
        v-if="
          store.getters['collection/categoriesByParent'](category.name).length >
          0
        "
        @click="store.commit('layout/categoryOpenToggle', category)"
      >
        <svg
          class="w-4 h-4 fill-current transition-fast"
          :class="{
            'rotate-90': state.layout.categoriesOpen.includes(category.name),
          }"
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
      </button>

      <div v-else class="ml-6"></div>
      <div
        class="w-full pl-2 rounded dark:hover:bg-zinc-800 hover:bg-zinc-200 py-0.5 transition-fast"
        :class="{
          '!bg-cyan-700 hover:!bg-cyan-800 text-white rounded': state.collection.categoriesSelected.includes(
            category.name
          ),
        }"
        @click.ctrl="
          store.commit('collection/categorySelectToggleMultiple', category)
        "
        @click.exact="
          store.dispatch('collection/categorySelectToggleSingle', category)
        "
      >
        {{ category.title }}
      </div>
    </div>
    <ul
      class="hidden pl-4"
      :class="{
        '!block': state.layout.categoriesOpen.includes(category.name),
      }"
    >
      <CollectionLevel :level="category.name" />
    </ul>
  </li>
</template>
