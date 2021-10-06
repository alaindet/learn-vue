<template>
  <form class="todo-form" @submit.prevent="onAddTodo">
    <input type="text" v-model="todo">
    &nbsp;
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    onAddTodo() {
      if (!this.todo) return;
      this.$emit('submitted-todo', this.todo);
      this._clearInput();
    },
    _clearInput() {
      this.todo = '';
      // TODO: Focus the input
    }
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
