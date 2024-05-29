<template>
  <UCard>
    <template #header>
      <div>
        Hello
      </div>
    </template>

    <div>
      <div>{{ card.name }}</div>
      <div>{{ card.desc }}</div>
    </div>

    <template #footer>
      <div>
        footer
      </div>
    </template>
  </UCard>
</template>

<script setup>
defineProps({
  card: {
    name: {
      type: String,
      default: "a"
    },
    desc: {
      type: String,
      default: "a"
    },
  }
})
</script>

<style>

</style>