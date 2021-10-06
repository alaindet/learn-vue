<template>
  <p>{{ message }}</p>
</template>

<script>
  export default {
    name: 'Greeting',
    data() {
      return {
        message: 'Hello World'
      }
    }
  }
</script>

<style scoped>
  p {
    color: blue;
  }
</style>
