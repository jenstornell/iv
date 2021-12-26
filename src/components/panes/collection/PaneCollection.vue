<script setup>
import { useStore } from "vuex";

import TabItems from "../../general/tabs/TabItems.vue";
import TabEmpty from "../../general/tabs/TabEmpty.vue";
import PaneCollectionFooterActions from "./PaneCollectionFooterActions.vue";
import PaneCollectionLevel from "./PaneCollectionLevel.vue";

const store = useStore();
const state = store.state;
</script>
<template>
  <div class="w-[300px] bg-zinc-700 flex flex-col">
    <TabItems
      :tabs="['Kategorier', 'Bibliotek', 'Avtal']"
      :active="state.collectionTabSelected"
      @click-tab="store.commit('setCollectionTabSelected', $event)"
    />
    <div class="flex-1 overflow-auto">
      <section
        class="px-4 py-4 pl-2"
        v-if="state.collectionTabSelected == 'Kategorier'"
      >
        <ul class="text-zinc-200">
          <PaneCollectionLevel :level="null" />
        </ul>
      </section>
      <section v-else>
        <TabEmpty />
      </section>
    </div>
    <PaneCollectionFooterActions />
  </div>
</template>
