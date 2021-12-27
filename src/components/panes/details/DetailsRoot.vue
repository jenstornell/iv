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
  <div class="bg-zinc-900 w-[300px] text-zinc-300 h-full flex flex-col">
    <TabItems
      :tabs="['Information', 'Metadata']"
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
          <div class="px-4 py-4 text-zinc-200 text-15">
            Ingen bild vald. Håll nere CTRL när du klickar för att välja flera
            bilder.
          </div>
        </section>
      </template>
      <section v-else>
        <TabEmpty />
      </section>
    </div>
  </div>
</template>
