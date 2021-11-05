<template>
  <div class="app">
    <h2>Counter <code>ref()</code> and <code>computed()</code></h2>
    <button @click="incrementCounter">Increment Counter</button>
    <p>Counter: {{ counter }}</p>
    <p>Double counter: {{ doubleCounter }}</p>

    <hr>

    <h2>User <code>reactive()</code></h2>
    <button @click="changeUserName('Bob')">Change to Bob</button>
    <p>{{ user.name }}</p>
    <app-alert :user="user" />

    <hr>

    <h2>Song <code>toRefs()</code></h2>
    <button @click="changeSongTitle('Something else')">Change title</button>
    <p>{{ title }}, {{ duration }}</p>

    <hr>

    <h2>Phrase <code>watch()</code></h2>
    <input type="text" placeholder="Enter a phrase..." v-model="phrase" />
    <p>{{ reversedPhrase }}</p>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
} from 'vue';

import { useCounter } from './hooks/counter';
import { usePhrase } from './hooks/phrase';
import AppAlert from './components/Alert.vue';

export default {
  name: 'App',
  components: {
    AppAlert,
  },
  setup() {
    // Imported hooks
    const counterExport = useCounter();
    const phraseExport = usePhrase('Initial phrase');

    // Lifecycle hooks
    onBeforeMount(() => { console.log('onBeforeMount') });
    onMounted(() => { console.log('onMounted') });
    onBeforeUpdate(() => { console.log('onBeforeUpdate') });
    onUpdated(() => { console.log('onUpdated') });
    onBeforeUnmount(() => { console.log('onBeforeUnmount') });
    onUnmounted(() => { console.log('onUnmounted') });
    onActivated(() => { console.log('onActivated') });
    onDeactivated(() => { console.log('onDeactivated') });

    // User (reactive)
    const user = reactive({ name: 'Alice' });
    const changeUserName = (name) => user.name = name;
    const userExport = { user, changeUserName };

    // Song (toRefs)
    const song = reactive({ title: 'Some song', duration: 123 });
    const changeSongTitle = (title) => song.title = title;
    const songExport = { ...toRefs(song), changeSongTitle };

    return {
      ...counterExport,
      ...userExport,
      ...songExport,
      ...phraseExport,
    };
  },
};
</script>

<style>
.app {
  --color-primary: rgb(24, 91, 214);
  --color-primary-light: rgb(51, 115, 235);
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

button:focus {
  outline: 1px dashed var(--color-primary-light);
  outline-offset: 2px;
}

input {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 2px solid var(--color-primary);
  transition: 0.2s all linear;
  font-size: 1rem;
  background-color: transparent;
}

input:hover {
  border-color: var(--color-primary-light);
}

input:focus {
  outline: 1px dashed var(--color-primary-light);
  outline-offset: 2px;
  border-color: var(--color-primary-light);
}
</style>
