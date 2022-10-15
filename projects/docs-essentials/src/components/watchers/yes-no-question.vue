<script setup lang="ts">
import { ref, watch } from 'vue'

const DEBOUNCE_DELAY = 600;
const question = ref('');
const timer = ref<any>(null);
const answer = ref('Answer will appear here');

function updateRandomAnswer() {
  answer.value = Math.random() > 0.5 ? 'Yes' : 'No';
};

// Debounce watcher while typing
watch(question, (newQuestion, oldQuestion) => {
  if (timer.value !== null) clearTimeout(timer.value);
  answer.value = 'Typing...';
  timer.value = setTimeout(updateRandomAnswer, DEBOUNCE_DELAY);
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>
