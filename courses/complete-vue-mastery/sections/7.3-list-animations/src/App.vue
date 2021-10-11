<template>
  <div id="app-container">

    <div class="buttons">
      <button @click="onAddRandom">Add random</button>
      <button @click="onRemoveAll">Remove all</button>
    </div>

    <p v-if="numbers.length === maxNumbersLength" class="hint">
      Max numbers reached
    </p>

    <ul>
      <transition-group name="my-list">
        <li
          v-for="(number, index) in numbers"
          :key="number"
          @click="onRemoveItem(index)"
        >
          <span class="remove">&times;</span>
          <span class="index">{{ index }}</span> {{ number }}
        </li>
      </transition-group>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      show: true,
      numbers: [1, 2, 3],
      maxNumbersLength: 7,
    };
  },
  methods: {
    onAddRandom() {
      const numbersCount = this.numbers.length;
      if (numbersCount === this.maxNumbersLength) return;
      const n = Math.floor(Math.random() * 100 + 1);
      const i = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(i, 0, n);
    },

    onRemoveAll() {
      this.numbers = [];
    },

    onRemoveItem(index) {
      this.numbers.splice(index, 1);
    },
  },
}
</script>

<style scoped>
#app-container {
  --color-primary: #0077b6;
  --color-danger: #e63946;
  --color-grey: #aaa;
  --color-black: #333;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

button {
  font-size: 22px;
  background-color: transparent;
  color: var(--color-black);
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin-block: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid currentColor;
  transition: 0.15s all ease-out;
  min-width: 100px;
}

button:hover {
  color: var(--color-primary);
  border-color: currentColor;
}

button:focus {
  outline-color: var(--color-grey);
  outline-offset: 4px;
  outline-style: dashed;
  outline-width: 1px;
}

.hint {
  font-style: italic;
  margin: 0.5rem 0;
}

.buttons {
  display: flex;
  margin: 0 -0.5rem;
}

.buttons > * {
  margin: 0 0.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 22px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin-block: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--color-grey);
  transition: 0.15s all ease-out;
  min-width: 100px;
  position: relative;
}

li:hover {
  color: var(--color-danger);
  border-color: currentColor;
}

li:hover .remove {
  opacity: 1;
}

li:hover .index {
  color: var(--color-danger);
}

li .remove {
  position: absolute;
  left: 0.5rem;
  font-size: 1.5rem;
  top: 0;
  bottom: 4px;
  display: flex;
  align-items: center;
  opacity: 0;
}

li .index {
  font-size: 0.6em;
  color: var(--color-grey);
  margin-right: 1rem;
  position: absolute;
  top: 0;
  right: -8px;
}

.my-list-enter-active {
  color: var(--color-primary);
  transform: scale(1.1);
  transition: 0.25s all ease-out;
}

.my-list-leave-active {
  position: absolute;
  transform: scale(0);
  transition: 0.25s all ease-out;
}

/*
Vue applies *-move to any moving element in a <transition-group>
*/
.my-list-move {
  transition: 0.15s all linear;
}
</style>
