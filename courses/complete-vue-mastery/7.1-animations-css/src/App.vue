<template>
  <div id="app-container">

    <button type="button" @click="onToggle">
      {{ show ? 'Leave' : 'Enter' }}
    </button>

    <transition name="hello">
      <h1 v-if="show" class="hello">Hello World</h1>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onToggle() {
      this.show = !this.show;
    }
  },
}
</script>

<style scoped>
  #app-container {
    --color-text: #820b8a;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
  }

  #app-container > * {
    margin: 2rem 0;
  }

  button {
    padding: 1rem 2rem;
    background-color: transparent;
    color: var(--color-text);
    font-size: 1.3rem;
    border-radius: 100px;
    border: 2px solid currentColor;
    transition: 0.15s all ease-out;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(130,11,138,0.1);
  }

  .hello {
    color: var(--color-text);
    font-family: sans-serif;
    font-size: 3rem;
  }

  /* Transitions here ------------------------------------------------------ */
  .hello-enter-from {
    opacity: 0;
  }

  .hello-enter-active {
    transition: 1s all ease-out;
  }

  .hello-enter-to {

  }

  .hello-leave-from {

  }

  .hello-leave-active {
    transition: 1s all ease-out;
  }

  .hello-leave-to {
    opacity: 0;
  }
</style>
