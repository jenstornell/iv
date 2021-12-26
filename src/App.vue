<script setup>
import HeaderRoot from "./components/panes/header/HeaderRoot.vue";
import CollectionRoot from "./components/panes/collection/CollectionRoot.vue";
import GalleryRoot from "./components/panes/gallery/GalleryRoot.vue";
import DetailsRoot from "./components/panes/details/DetailsRoot.vue";
</script>

<template>
  <div class="flex flex-col h-full">
    <HeaderRoot />
    <main class="flex h-full overflow-hidden">
      <CollectionRoot />
      <GalleryRoot />
      <DetailsRoot />
    </main>
  </div>
</template>
