<template>
  <div class="result" v-if="result">
    <div class="title">{{ result.title }}</div>
    <div class="desc">{{ result.desc }}</div>
    <p class="score">
      Your score is: <strong>{{ score }}</strong>
      ({{ correctAnsweredCount }} out of {{ answeredCount }})
    </p>
  </div>
</template>

<script>
export default {
  name: 'QuizResult',
  props: [
    'result',
    'correctAnsweredCount',
    'answeredCount',
  ],
  computed: {
    score() {
      const fraction = this.correctAnsweredCount / this.answeredCount;
      return (100 * fraction).toFixed(0) + '%';
    },
  },
};
</script>
