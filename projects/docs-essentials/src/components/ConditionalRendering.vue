
<script setup lang="ts">
import { ref } from 'vue';

const show = ref(true);

function toggleShow() {
  show.value = !show.value;
}

const page = ref<'foo' | 'bar' | 'baz'>('foo');

function setPage(_page: 'foo' | 'bar' | 'baz') {
  page.value = _page;
}
</script>

<template>
  <div class="conditional-rendering">

    <div class="example">
      <p>This always shows</p>
      <button type="button" @click="toggleShow">Toggle visibility</button>
      <p v-if="show">Showing...</p>
      <p v-else>Hidden: Toggle the visibility to show paragraph</p>
    </div>

    <div class="example">
      <p v-if="page === 'foo'">Foo</p>
      <p v-else-if="page === 'bar'">Bar</p>
      <p v-else-if="page === 'baz'">Baz</p>
      <button type="button" @click="setPage('foo')">Foo</button>
      <button type="button" @click="setPage('bar')">Bar</button>
      <button type="button" @click="setPage('baz')">Baz</button>
    </div>

  </div>
</template>

<style scoped>
  .conditional-rendering {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .example {
    padding: 1rem;
    border: 1px solid black;
  }
</style>
