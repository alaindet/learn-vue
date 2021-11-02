<template>
  <div class="app">
    <h2>Counter</h2>
    <button @click="incrementCounter">Increment Counter</button>
    <p>{{ counter }}</p>

    <hr>

    <h2>User</h2>
    <button @click="changeUserName('Bob')">Change to Bob</button>
    <p>{{ user.name }}</p>

    <hr>

    <h2>Song</h2>
    <button @click="changeSongTitle('Something else')">Change title</button>
    <p>{{ title }}, {{ duration }}</p>

    <hr>

    <h2>Phrase</h2>
    <input type="text" v-model="phrase" />
    <p>{{ reversedPhrase }}</p>

    <hr>

    <h2>Troubles</h2>
    <button @click="incrementTroubles">Increment troubles</button>
    <p>Troubles: {{ troubles }}</p>
    <p>Double troubles: {{ doubleTroubles }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch, computed } from 'vue';

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
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
