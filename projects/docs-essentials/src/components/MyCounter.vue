<script setup lang="ts">
import { ref, nextTick } from 'vue';

const counter = ref(0);

function increment() {
  counter.value++;
  nextTick(() => console.log('this happens after updating the DOM'));
}
</script>

<template>
  <button @click="increment">
    {{ counter }}
  </button>
</template>
