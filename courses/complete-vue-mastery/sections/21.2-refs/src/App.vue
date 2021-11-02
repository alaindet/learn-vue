<template>
  <div class="app">
    <h2>Counter <code>ref()</code></h2>
    <button @click="incrementCounter">Increment Counter</button>
    <p>{{ counter }}</p>

    <hr>

    <h2>User <code>reactive()</code></h2>
    <button @click="changeUserName('Bob')">Change to Bob</button>
    <p>{{ user.name }}</p>

    <hr>

    <h2>Song <code>toRefs()</code></h2>
    <button @click="changeSongTitle('Something else')">Change title</button>
    <p>{{ title }}, {{ duration }}</p>

    <hr>

    <h2>Phrase <code>watch()</code></h2>
    <input type="text" placeholder="Enter a phrase..." v-model="phrase" />
    <p>{{ reversedPhrase }}</p>

    <hr>

    <h2>Troubles <code>computed()</code></h2>
    <button @click="incrementTroubles">Increment troubles</button>
    <p>Troubles: {{ troubles }}</p>
    <p>Double troubles: {{ doubleTroubles }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdate } from 'vue';

export default {
  name: 'App',
  setup() {
    // Counter (refs)
    const counter = ref(42);
    const incrementCounter = () => counter.value++;
    const counterExport = { counter, incrementCounter };

    // User (reactive)
    const user = reactive({ name: 'Alice' });
    const changeUserName = (name) => user.name = name;
    const userExport = { user, changeUserName };

    // Song (toRefs)
    const song = reactive({ title: 'Some song', duration: 123 });
    const changeSongTitle = (title) => song.title = title;
    const songExport = { ...toRefs(song), changeSongTitle };

    // Phrase (watcher)
    const phrase = ref('');
    const reversedPhrase = ref('');
    watch(/*Dependencies*/[phrase], (newValue, oldValue) => {
      if (newValue !== oldValue) {
        reversedPhrase.value = phrase.value.split('').reverse().join('');
      }
    });
    const phraseExport = { phrase, reversedPhrase };

    // Troubles (computed)
    const troubles = ref(0);
    const incrementTroubles = () => troubles.value++;
    const doubleTroubles = computed(() => troubles.value * 2); // Returns a ref!
    const troublesExport = { troubles, doubleTroubles, incrementTroubles };

    return {
      ...counterExport,
      ...userExport,
      ...songExport,
      ...phraseExport,
      ...troublesExport,
    };
  },
};
</script>

<style>
.app {
  --color-primary: rgb(24, 91, 214);
  --color-primary-dark: rgb(17, 67, 160);
  --color-primary-darkest: rgb(21, 60, 133);
  --color-accent: rgb(221, 57, 57);
  --color-grey: rgb(224, 224, 224);

  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

code {
  color: var(--color-accent);
  background-color: var(--color-grey);
  padding: 0.1em 0.3em;
  font-size: 0.8em;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 2px solid rgba(0,0,0,0.2);
  transition: 0.2s all linear;
  cursor: pointer;
  color: var(--color-primary);
  border-color: currentColor;
  background-color: transparent;
}

button:hover {
  background-color: rgba(15, 9, 9, 0.1);
}

input {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 2px solid rgba(0,0,0,0.2);
  transition: 0.2s all linear;
  font-size: 1rem;
  border-color: currentColor;
  background-color: transparent;
}

input:hover {
  border-color: var(--color-primary-dark);
}

input:focus {
  border-color: var(--color-primary-darkest);
}
</style>
