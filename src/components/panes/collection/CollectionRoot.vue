<script setup>
import { useStore } from "vuex";

import TabItems from "../../general/tab/TabItems.vue";
import TabEmpty from "../../general/tab/TabEmpty.vue";
import CollectionFooterActions from "./CollectionFooterActions.vue";
import CollectionLevel from "./CollectionLevel.vue";

const store = useStore();
const state = store.state;
</script>
<template>
  <div class="w-[300px] dark:bg-zinc-900 bg-white flex flex-col">
    <TabItems
      :tabs="['Kategorier', 'Bibliotek', 'Avtal']"
      :active="state.layout.collectionTabSelected"
      class="pl-2"
      @click-tab="store.commit('layout/setCollectionTabSelected', $event)"
    />
    <div class="flex-1 overflow-auto">
      <section
        class="px-4 py-4 pl-2"
        v-if="state.layout.collectionTabSelected == 'Kategorier'"
      >
        <ul class="dark:text-zinc-200">
          <CollectionLevel :level="null" />
        </ul>
      </section>
      <section v-else>
        <TabEmpty />
      </section>
    </div>
    <CollectionFooterActions />
  </div>
</template>
