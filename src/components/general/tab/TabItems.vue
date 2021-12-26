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
  <div class="flex pt-2 select-none text-15 border-zinc-800 bg-zinc-800">
    <div
      class="px-3 py-1.5 rounded-t text-zinc-300 hover:bg-zinc-700 transition-fast"
      :class="{ '!bg-zinc-900 !hover:bg-zinc-900': active == tab }"
      v-for="tab in tabs"
      @click="clickTab(tab)"
    >
      {{ tab }}
    </div>
  </div>
</template>
