<script setup lang="ts">
const count = ref(0);
</script>

<template>
  <button @click="count++" class="px-2 py-1 bg-emerald-900 rounded-md">count is {{ count }}</button>
</template>