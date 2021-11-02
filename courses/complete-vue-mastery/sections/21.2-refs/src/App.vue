<template>
  <div>
    <button @click="increment">Increment</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const counter = ref(42);
    const increment = () => counter.value++;
    return { counter, increment };
  },
};
</script>
