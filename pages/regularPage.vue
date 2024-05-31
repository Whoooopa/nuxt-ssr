<template>
  <div class="bg-slate-700 px-20 py-20 grid grid-cols-2 justify-items-center gap-20">
    <UCard class="text-slate-600 w-full" v-for="image in count">
      <template #header>
        
        <USkeleton class="h-8" v-if="pending"/>
        <div class="h-8" v-else> 
          {{ image.data[0].title }}
        </div>
      </template>
  
      <USkeleton class="h-32" v-if="pending"/>
      <NuxtImg class="h-32 w-auto mx-auto" v-else 
      :src="image.links[0].href"/>
  
      <template #footer>
        <USkeleton class="h-12" v-if="pending"/>
        <div class="h-12" v-else> 
          {{ image.data[0].location }} at {{ image.data[0].date_created }}
        </div>
      </template>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
const count = useState('nasaImages', () => []);
const { data: images, pending, error, refresh } = await useFetch('https://images-api.nasa.gov/search', {
  query: { q: 'space', media_type: 'image', page_size: '10' },
  transform: (_images) => _images.collection.items,
})

count.value = images._rawValue;
console.log(toRaw(images.value));
console.log(toRaw(count.value));
</script>

<style>

</style>