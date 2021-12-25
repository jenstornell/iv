<script setup>
import PaneHeader from "./components/panes/header/PaneHeader.vue";
import CollectionsPane from "./components/panes/collections/CollectionsPane.vue";
import GalleryPane from "./components/panes/gallery/GalleryPane.vue";
import DetailsPane from "./components/panes/details/DetailsPane.vue";
</script>

<template>
  <div class="flex flex-col h-full overflow-hidden">
    <PaneHeader />
    <main class="flex overflow-hidden">
      <CollectionsPane />
      <GalleryPane />
      <DetailsPane />
    </main>
  </div>
</template>
