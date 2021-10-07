<template>
  <div>
    <app-form>

      <!-- v-slot only works on template -->
      <template v-slot:help>
        <p>{{ helpText }}</p>
      </template>

      <template v-slot:fields>
        <input type="text" placeholder="Email...">
        <input type="text" placeholder="Username...">
        <input type="text" placeholder="Password...">
      </template>

      <template v-slot:buttons>
        <button type="submit">Submit</button>
      </template>

      <!-- Occupy the default slot location -->
      <p>Something</p>

    </app-form>
  </div>
</template>

<script>
import AppForm from './components/AppForm.vue';

export default {
  name: 'App',
  components: {
    AppForm,
  },
  data() {
    return {
      helpText: 'This is some help text.',
    };
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
