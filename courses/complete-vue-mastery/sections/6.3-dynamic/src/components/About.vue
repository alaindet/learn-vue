<template>
  <h1>About</h1>
</template>

<script>
export default {
  name: 'About',
  unmounted() {
    console.log('About unmounted');
  },
  // Only triggers when entering dynamic component inside <keep-alive>},
  activated() {
    console.log('About activated');
  },
  // Only triggers when leaving dynamic component inside <keep-alive>
  deactivated() {
    console.log('About deactivated');
  },
}
</script>
