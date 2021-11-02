<template>
  <div id="app">
    <div class="scroll-position">{{ offset }}</div>
  </div>
</template>

<script>
import scrollMixin from '@/scroll.mixin';

export default {
  name: 'App',
  mixins: [
    scrollMixin,
  ],
  mounted() {
    console.log('App mounted');
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 3000px;
  position: relative;
}
.scroll-position {
  position:fixed;
  left: 10px;
  right: 10px;
}
</style>
