<template>
  <div class="todo-form">
    <input type="text" v-model="todo">
    &nbsp;
    <button @click="addTodo">Add</button>
  </div>
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
    addTodo() {
      // ...
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
