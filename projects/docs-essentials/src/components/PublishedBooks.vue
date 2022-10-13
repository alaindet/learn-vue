<script setup lang="ts">
import { reactive, computed } from 'vue';

const author = reactive({
  name: 'John Smith',
  books: [
    'The first book',
    'The second book',
    'The third book',
  ],
});

const publishedBooks = computed(() => author.books.length ? 'Yes' : 'No');
</script>

<template>
  <p>Author: {{ author.name }}</p>
  <p>Has published books?: {{ publishedBooks }}</p>
</template>
