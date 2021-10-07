<template>
  <form class="todo-form" @submit.prevent="onAddTodo">
    <input type="text" v-model="todo" ref="todo">
    &nbsp;
    <button type="submit">Add</button>
  </form>
</template>

<script>
const Events = {
  SubmittedTodo: 'submitted-todo',
};

export default {
  name: 'TodoForm',
  data() {
    return {
      todo: '',
    };
  },
  props: {
    onSubmit: Function,
  },
  emits: [
    Events.SubmittedTodo,
  ],
  methods: {
    onAddTodo() {
      if (!this.todo) return;
      this.$emit(Events.SubmittedTodo, this.todo); // Emit event
      // this.onSubmit(this.todo); // Calling callback (equivalent)
      this.todo = '';
      this.$refs.todo.focus();
    },
  },
}
</script>

<style scoped lang="scss">
  .todo-form {
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 0.5rem;
  }
</style>
