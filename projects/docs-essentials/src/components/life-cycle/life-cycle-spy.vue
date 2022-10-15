<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const counter = ref(0);

onBeforeMount(() => console.log('onBeforeMount'));
onMounted(() => console.log('onMounted'));

onBeforeUpdate(() => console.log('onBeforeUpdate'));
onUpdated(() => console.log('onUpdated'));

onBeforeUnmount(() => console.log('onBeforeUnmount'));
onUnmounted(() => console.log('onUnmounted'));
</script>

<template>
  <p>Lifecycle spy</p>
  <p>Counter: {{ counter }}</p>
  <button @click="counter++">+1</button>
</template>
