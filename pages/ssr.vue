<template>
  <MarkdownComponent>
    <CountButton />
  </MarkdownComponent>
</template>

<script setup lang="ts">
useHead({
  title: 'SSR',
  meta: [
    { name: 'description', content: 'this call api from nitro under server/api with useLazyFetch'}
  ]
})
</script>

<style>

</style>