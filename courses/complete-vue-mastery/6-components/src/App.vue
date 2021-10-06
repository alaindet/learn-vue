<template>
  <div class="app">
    <todo-form />
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
        todos: ['Learn Vue'],
      };
    }
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
