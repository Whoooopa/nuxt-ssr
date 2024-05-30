<template>
  <div>
    <button class="bg-green-500 px-2 py-1" @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0);
</script>

<style>

</style>