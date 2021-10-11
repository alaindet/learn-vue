<template>
  <div>

    <select v-model="componentName">
      <option value="Home">Home</option>
      <option value="About">About</option>
      <option value="Contact">Contact</option>
    </select>

    <!-- Dynamic component -->
    <!-- <component :is="componentName"></component> -->

    <!--
      Dynamic component
      Preserves instances
      Does not trigger unmount
      Triggers two new lifecycle hooks: activated and deactivated
    -->
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>

  </div>
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    Home,
    About,
    Contact,
  },
  data() {
    return {
      componentName: 'Home',
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
