<script setup lang="ts">
import { reactive, computed, ref } from 'vue';

const isActive = ref(true);
const isError = ref(true);

const cssClass = computed(() => ({
  '-active': isActive.value && !isError.value,
  '-error': isError.value,
}));

function toggleActive() {
  isActive.value = !isActive.value;
}

function toggleError() {
  isError.value = !isError.value;
}
</script>

<template>
  <div class="box-example">
    <button type="button" @click="toggleActive">
      Active? ({{ isActive ? 'YES' : 'NO' }})
    </button>

    <button type="button" @click="toggleError">
      Error? ({{ isError ? 'YES' : 'NO' }})
    </button>

    <div class="box" :class="cssClass"></div>
  </div>
</template>

<style scoped>
  .box-example {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: 2px solid #aaa;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
    transition: 0.3s all linear;
  }

  button:hover {
    background-color: #eee;
  }

  .box {
    width: 3rem;
    height: 3rem;
    background-color: #ccc;
  }

  .box.-active {
    background-color: blue;
  }

  .box.-error {
    background-color: red;
  }
</style>
