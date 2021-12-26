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
    class="flex border-t-8 select-none border-zinc-800 bg-zinc-800 border-x-8"
  >
    <div
      class="py-1.5 px-3 rounded-t text-zinc-300 hover:bg-zinc-900 transition-fast"
      :class="{ 'bg-zinc-700 hover:bg-zinc-700': active == tab }"
      v-for="tab in tabs"
      @click="clickTab(tab)"
    >
      {{ tab }}
    </div>
  </div>
</template>
