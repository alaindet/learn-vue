<template>
  <h1>Contact</h1>
</template>

<script>
export default {
  name: 'Contact',
  unmounted() {
    console.log('Contact unmounted');
  },
  // Only triggers when entering dynamic component inside <keep-alive>
  activated() {
    console.log('Contact activated');
  },
  // Only triggers when leaving dynamic component inside <keep-alive>
  deactivated() {
    console.log('Contact deactivated');
  },
}
</script>
