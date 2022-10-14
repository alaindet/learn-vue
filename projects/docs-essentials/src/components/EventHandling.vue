<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);

// Method references receive the event
function increment(event: MouseEvent) {
  counter.value++;
  console.log('the mouse event', event);
}

function incrementBy(amount: number, event?: MouseEvent) {
  counter.value += amount;
  console.log('the mouse event', event);
}
</script>

<template>
  <p>Counter: {{ counter }}</p>

  <!-- Inline handler (shorthand binding via @) -->
  <button type="button" @click="counter++">+1</button>
  <!-- Equivalent explicit binding via v-on -->
  <!-- <button type="button" v-on:click="counter++">+1 (inline, explicit)</button> -->

  <!-- Method reference -->
  <button type="button" @click="increment">+1</button>

  <!-- Inline call of method with params -->
  <button type="button" @click="incrementBy(10)">+10</button>

  <!-- Inline call of method with params and original event -->
  <button type="button" @click="incrementBy(10, $event)">+10</button>

</template>
