<template>
<UCard>
    <template #header>
    <div>
        Hello
    </div>
    </template>

    <div>
    <UInput v-model="name" />
    <UInput v-model="desc" />
    </div>

    <template #footer>
    <div>
        footer
        <UButton color="primary" @click="handleNewCard">New card</UButton>
    </div>
    </template>
</UCard>
</template>

<script setup>
const name = ref('');
const desc = ref('');
const testStore = useTestStore();

const handleNewCard = () => {
testStore.addCard({ name: name.value, desc: desc.value});
}
</script>

<style>

</style>