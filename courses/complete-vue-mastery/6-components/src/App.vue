<template>
  <Greeting />
</template>

<script>
  import Greeting from './components/Greeting.vue';

  export default {
    name: 'App',
    // Locally imported components
    components: {
      Greeting,
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
