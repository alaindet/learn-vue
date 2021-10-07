<template>
  <h1>Home</h1>
</template>

<script>
export default {
  name: 'Home',
  unmounted() {
    console.log('Home unmounted');
  },
  // Only triggers when entering dynamic component inside <keep-alive>
  activated() {
    console.log('Home activated');
  },
  // Only triggers when leaving dynamic component inside <keep-alive>
  deactivated() {
    console.log('Home deactivated');
  },
}
</script>
