<script setup>
import PaneHeader from "./components/panes/header/PaneHeader.vue";
import PaneCollection from "./components/panes/collection/PaneCollection.vue";
import PaneGallery from "./components/panes/gallery/PaneGallery.vue";
import PaneDetails from "./components/panes/details/PaneDetails.vue";
</script>

<template>
  <div class="flex flex-col h-full overflow-hidden">
    <PaneHeader />
    <main class="flex h-full overflow-hidden">
      <PaneCollection />
      <PaneGallery />
      <PaneDetails />
    </main>
  </div>
</template>
