<template>
  <div class="app-container">

    <quiz-questions
      v-if="answeredCount < questions.length"
      :questions="questions"
      :answeredCount="answeredCount"
      :currentQuestionIndex="currentQuestionIndex"
      @answered="onAnswered($event)"
    />

    <template v-else>
      <quiz-result
        :result="result"
        :correctAnsweredCount="correctAnsweredCount"
        :answeredCount="answeredCount"
      />

      <button type="button" class="reset-btn" @click="onReset">
        Reset
      </button>
    </template>

  </div>
</template>

<script>
import QuizQuestions from './components/QuizQuestions.vue';
import QuizResult from './components/QuizResult.vue';
import INITIAL_DATA from './data';

export default {
  name: 'App',
  components: {
    QuizQuestions,
    QuizResult,
  },
  data() {
    return {
      questions: INITIAL_DATA.QUESTIONS,
      results: INITIAL_DATA.RESULTS,
      answeredCount: 0,
      correctAnsweredCount: 0,
      currentQuestionIndex: 0,
      result: null,
    };
  },
  methods: {

    onReset() {
      this.answeredCount = 0;
      this.correctAnsweredCount = 0;
      this.currentQuestionIndex = 0;
      this.result = null;
    },

    onAnswered(answer) {
      this.answeredCount++;
      this.currentQuestionIndex++;

      if (answer.isCorrect) {
        this.correctAnsweredCount++;
      }

      if (this.answeredCount === this.questions.length) {
        this.result = this._getResult();
      }
    },

    _getResult() {
      for (const result of this.results) {
        const { min, max } = result;
        const count = this.correctAnsweredCount;
        if (count >= min && count <= max) {
          return result;
        }
      }
    },

  },
};
</script>
