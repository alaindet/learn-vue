<template>
  <div class="questions-container">

    <div class="progress">
      <div class="progress-bar" :style="barStyle"></div>
      <div class="status">
        {{ answeredCount }} out of {{ questions.length }}
        questions answered
      </div>
    </div>

    <transition-group name="fade" mode="out-in">
      <div
        v-for="(question, questionIndex) in questions"
        :key="question.text"
        v-show="questionIndex === currentQuestionIndex"
        class="single-question"
      >
        <div class="question">{{ question.text }}</div>
        <div class="answers">
          <div
            v-for="answer in question.answers"
            :key="answer.text"
            class="answer"
            @click.prevent="onAnswer(answer)"
          >
            {{ answer.text }}
          </div>
        </div>
      </div>
    </transition-group>

  </div>
</template>

<script>
const Events = {
  Answered: 'answered',
};

export default {
  name: 'QuizQuestions',
  props: [
    'questions',
    'answeredCount',
    'currentQuestionIndex',
  ],
  emits: [
    Events.Answered,
  ],
  computed: {
    barStyle() {
      const fraction = this.answeredCount / this.questions.length;
      const width = (100 * fraction).toFixed(0) + '%';
      return { width };
    },
  },
  methods: {
    onAnswer(answer) {
      this.$emit(Events.Answered, answer);
    },
  },
};
</script>
