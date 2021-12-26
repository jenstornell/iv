<script setup>
import { useStore } from "vuex";

import GalleryHeaderActions from "./GalleryHeaderActions.vue";
import GalleryHeaderTags from "./GalleryHeaderTags.vue";
import GalleryFooterActions from "./GalleryFooterActions.vue";

const store = useStore();
const state = store.state;
</script>
<template>
  <div class="flex flex-col flex-1 h-full bg-zinc-800">
    <div class="flex flex-col gap-2 px-8 py-2">
      <GalleryHeaderActions />
      <GalleryHeaderTags />
    </div>
    <div class="flex-1 overflow-y-auto">
      <div class="flex flex-wrap gap-3 px-8 pt-2">
        <template v-for="image in state.details.images">
          <div
            class="flex-[1_0_auto] flex"
            :class="`h-${state.details.imageLayout}`"
          >
            <img
              :src="`./../src/assets/images/${image}`"
              class="object-cover w-full shadow-lg ring-4 ring-transparent hover:ring-zinc-500 ring-offset-4 ring-offset-zinc-800 transition-fast"
              :class="{
                '!ring-cyan-500': state.details.imagesSelected.includes(image),
              }"
              @click.exact="
                store.commit('details/imageSelectToggleSingle', image)
              "
              @click.ctrl="
                store.commit('details/imageSelectToggleMultiple', image)
              "
            />
          </div>
        </template>
      </div>
    </div>

    <div class="px-8">
      <GalleryFooterActions />
    </div>
  </div>
</template>
