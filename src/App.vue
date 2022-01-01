<script setup>
import { useStore } from "vuex";

import HeaderRoot from "./components/panes/header/HeaderRoot.vue";
import CollectionRoot from "./components/panes/collection/CollectionRoot.vue";
import GalleryRoot from "./components/panes/gallery/GalleryRoot.vue";
import DetailsRoot from "./components/panes/details/DetailsRoot.vue";

const store = useStore();
const state = store.state;
</script>

<template>
  <div
    class="flex flex-col h-full"
    :class="{ dark: state.layout.mode === 'dark' }"
  >
    <HeaderRoot class="dark:text-zinc-300 text-zinc-800" />
    <main class="flex h-full overflow-hidden dark:text-zinc-300 text-zinc-800">
      <CollectionRoot />
      <GalleryRoot />
      <DetailsRoot />
    </main>
  </div>
</template>
