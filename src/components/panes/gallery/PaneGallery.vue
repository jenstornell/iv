<script setup>
import PaneGalleryHeaderActions from "./PaneGalleryHeaderActions.vue";
import PaneGalleryHeaderTags from "./PaneGalleryHeaderTags.vue";
import PaneGalleryFooterActions from "./PaneGalleryFooterActions.vue";
import { useStore } from "vuex";

const store = useStore();
const state = store.state;
</script>
<template>
  <div class="flex flex-col flex-1 h-full overflow-y-auto bg-zinc-800">
    <div class="flex flex-col gap-2 px-8 py-2 pb-4">
      <PaneGalleryHeaderActions />
      <PaneGalleryHeaderTags />
    </div>
    <div>
      <div class="flex flex-wrap h-full gap-3 px-8 pt-2 overflow-auto">
        <template v-for="image in state.images">
          <div class="flex-[1_0_auto] flex h-[200px]">
            <img
              :src="`./../src/assets/images/${image}`"
              class="object-cover w-full shadow-lg ring-4 ring-transparent hover:ring-zinc-500 ring-offset-4 ring-offset-zinc-800 transition-fast"
              :class="{
                '!ring-cyan-500': state.imagesSelected.includes(image),
              }"
              @click.exact="store.commit('imageSelectToggleSingle', image)"
              @click.ctrl="store.commit('imageSelectToggleMultiple', image)"
            />
          </div>
        </template>
      </div>
    </div>

    <div class="px-8 pt-2">
      <PaneGalleryFooterActions />
    </div>
  </div>
</template>
