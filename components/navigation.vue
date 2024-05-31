<template>
  <div class="flex flex-row gap-4">
    <button v-for="link in links" :key="link.label" @click="router.push({name:`${link.to}`})">
      {{ link.label }}
    </button>
  </div>
</template>

<script setup>
const router = useRouter();

const links = [{
  label: "SSR",
  to: "ssr"
},{
  label: "Home",
  to: "index"
},{
  label: "ServerPage",
  to: "serverPage"
},{
  label: "RegularPage",
  to: "regularPage"
},]
</script>

<style>

</style>