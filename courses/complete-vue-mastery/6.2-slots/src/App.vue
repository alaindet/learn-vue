<template>
  <div>
    <app-form />
  </div>
</template>

<script>
import AppForm from './components/AppForm.vue';

export default {
  name: 'App',
  components: [
    AppForm,
  ],
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
