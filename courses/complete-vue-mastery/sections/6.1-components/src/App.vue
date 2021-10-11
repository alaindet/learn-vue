<template>
  <div>
    <!-- Using callbacks instead of events is discouraged -->
    <!-- <todo-form :onSubmit="onSubmittedTodo" /> -->
    <todo-form @submitted-todo="onSubmittedTodo" />
    <todos :todos="todos" />
  </div>
</template>

<script>
  import TodoForm from './components/TodoForm.vue';
  import Todos from './components/Todos.vue';

  export default {
    name: 'App',
    components: {
      TodoForm,
      Todos,
    },
    data() {
      return {
        todos: [],
      };
    },
    methods: {
      onSubmittedTodo(todo) {
        this.todos = [...this.todos, todo];
      },
    },
  }
</script>

<style>
  #app {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #app > * {
    margin: 1rem 0;
  }
</style>
