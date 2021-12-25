<script setup>
import GalleryPaneHeaderActions from "./GalleryPaneHeaderActions.vue";
import GalleryPaneFooterActions from "./GalleryPaneFooterActions.vue";

const images = [
  "blackthorn-flowers-6877018_960_720.jpg",
  "eagle-6740066_960_720.webp",
  "houses-6504533_960_720.jpg",
  "lake-6278825_960_720.jpg",
  "lake-6867173_960_720.jpg",
  "mountains-6118182_960_720.jpg",
  "new-year-3974099_960_720.webp",
  "night-6876156_960_720.jpg",
  "sauerland-6787215_960_720.webp",
  "window-6800397_960_720.jpg",
];
</script>
<template>
  <div class="flex flex-col flex-1 h-full overflow-y-auto bg-zinc-800">
    <GalleryPaneHeaderActions />
    <div
      class="
        grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
        gap-2
        h-full
        overflow-auto
        px-8
      "
    >
      <template v-for="i in 10">
        <figure v-for="image in images.reverse()">
          <img
            :src="`./../src/assets/images/${image}`"
            class="object-cover shadow-lg aspect-square"
          />
        </figure>
      </template>
    </div>

    <div class="px-8 pt-2">
      <GalleryPaneFooterActions />
    </div>
  </div>
</template>
