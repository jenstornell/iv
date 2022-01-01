<script setup>
const props = defineProps({
  label: String,
});
</script>
<template>
  <button
    class="flex items-center gap-2 px-1.5 rounded py-1.5 dark:text-zinc-300 text-zinc-800 transition-fast"
    :class="{ 'px-3': label }"
  >
    <slot />
    {{ label }}
  </button>
</template>
