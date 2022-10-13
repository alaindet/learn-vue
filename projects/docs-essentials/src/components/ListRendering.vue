<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
  { title: 'Foo', isDone: false },
  { title: 'Bar', isDone: true },
  { title: 'Baz', isDone: false },
]);
</script>

<template>
  <ul>
    <!-- <li v-for="item in items">
      <input type="checkbox" :checked="item.isDone" />
      <span>{{ item.title }}</span>
    </li> -->
    <li v-for="(item, index) in items">
      <input type="checkbox" :checked="item.isDone" />
      <span>#{{ index }} {{ item.title }}</span>
    </li>
  </ul>
</template>
