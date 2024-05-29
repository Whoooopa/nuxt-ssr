<template>
  <div>
    <Navigation />
    <InputCard />
    <UDivider />
    <TestCard v-if="cards" v-for="card in cards" :card="card"/>
    {{ 'onServerPrefetch&fetch ' }}
    <div class="mb-20">
      
      {{ data }}
    </div>
    
    <div class="mb-20">
      {{ 'UseAsyncData&Fetch ' }}
      {{  dataWithUseAsyncDataFetch }}
    </div>
    <UDivider />
    <div class="mb-20">
      {{ 'UseFetch ' }}
      {{ dataWithUseFetch }}
    </div>
    <UDivider />
    <div>
      {{ 'testData here ' }}
      {{ testData }}
    </div>
  </div>
</template>

<script setup>

const data = ref(null);
const dataWithUseAsyncDataFetch = ref(null);
const dataWithUseFetch = ref(null);
// const logLifecycleHook = (hookName: string) => {
//   console.log(hookName, process.env, this);
// };

// onMounted(() => {
//   logLifecycleHook('onMounted');
// });

// onUpdated(() => {
//   logLifecycleHook('onUpdated');
// });

// onUnmounted(() => {
//   logLifecycleHook('onUnmounted');
// });

// onBeforeMount(() => {
//   logLifecycleHook('onBeforeMount');
// });

// onBeforeUpdate(() => {
//   logLifecycleHook('onBeforeUpdate');
// });

// onBeforeUnmount(() => {
//   logLifecycleHook('onBeforeUnmount');
// });

// onErrorCaptured((err, instance, info) => {
//   console.log('onErrorCaptured', process.env, err, instance, info, this);
// });

// onRenderTracked((e) => {
//   console.log('onRenderTracked', process.env, e, this);
// });

// onRenderTriggered((e) => {
//   console.log('onRenderTriggered', process.env, e, this);
// });

// onActivated(() => {
//   logLifecycleHook('onActivated');
// });

// onDeactivated(() => {
//   logLifecycleHook('onDeactivated');
// });

// called in server side and is transferred to client
const testStore = useTestStore();
dataWithUseAsyncDataFetch.value = await useAsyncData('item', () => $fetch("https://images-api.nasa.gov/search?q=space&media_type=image&page_size=1"))
dataWithUseFetch.value = await useFetch("https://images-api.nasa.gov/search",{
  query: {q: 'sun', media_type: 'image', page_size: '1'}
})
onServerPrefetch(async () => {

  data.value = await $fetch("https://images-api.nasa.gov/search?q=space&media_type=image&page_size=1");
  testStore.$state.spaceImage = data.value;
});
console.log(toRaw(testStore.$state.spaceImage));
console.log(window);
const cards = computed(()=> testStore.$state.cards);
const testData = computed(()=> testStore.$state.spaceImage);
console.log(testData.value);
</script>

<style>

</style>