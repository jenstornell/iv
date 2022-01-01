<script setup>
const props = defineProps({
  active: String,
  tabs: Array,
});

const emit = defineEmits(["click-tab"]);
function clickTab(tab) {
  emit("click-tab", tab);
}
</script>
<template>
  <div
    class="flex pt-2 select-none text-15 dark:border-zinc-800 dark:bg-zinc-800 bg-zinc-200"
  >
    <div
      class="px-3 py-1.5 rounded-t transition-fast dark:text-zinc-300"
      :class="{
        'dark:bg-zinc-900 dark:hover:bg-zinc-900 bg-white hover:bg-white':
          active === tab,
        'dark:hover:bg-zinc-700 hover:bg-zinc-300': active !== tab,
      }"
      v-for="tab in tabs"
      @click="clickTab(tab)"
    >
      {{ tab }}
    </div>
  </div>
</template>
