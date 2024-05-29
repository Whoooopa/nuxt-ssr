<template>
  <div>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
  </div>
</template>

<script setup>
const route = useRoute();

const links = [{
  label: "CSR",
  to: "/csr"
},{
  label: "SSR",
  to: "/ssr"
},{
  label: "Home",
  to: "/"
},{
  label: "ISR",
  to: "/isr"
},{
  label: "Prerender",
  to: "/prerender"
},{
  label: "SWR",
  to: "/swr"
},]
</script>

<style>

</style>