<template>
  <div>
    <Navigation />
    <InputCard />
    <UDivider />
    <div class="mb-20">
      
      {{ loading ? "Loading" : data }}
    </div>
  </div>
</template>

<script setup lang="ts">
const data = ref();
const loading = ref(true);
try{
  const { data: hello, pending } = await useLazyFetch("/api/hello2");
  data.value = hello;
  loading.value = pending.value;
  console.log(hello);
  console.log(loading.value);
}
catch(e){
  data.value = e;
  loading.value = false;
  console.log(e)
}

useHead({
  title: 'SSR',
  meta: [
    { name: 'description', content: 'this call api from nitro under server/api with useLazyFetch'}
  ]
})
</script>

<style>

</style>