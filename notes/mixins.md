# Mixins

A mixin is an object which has reusable features shared across multiple components

- It can have any component option from the Options API
- It gets merged into the host component
- Host component options take precedence
- Lifecycle hooks are not merged
- Mixin lifecycle hooks are called first, in order, then the host ones

## Issues

- **Namespace clashing**, meaning you need to check the code to avoid overwrites and clashing

## Example

```js
// mixin.js
export default {
  mounted() {
    console.log('Mixin: mounted');
  },
  methods: {
    salute() {
      console.log('Mixin: Hello world');
    },
  },
}

// Foo.vue
import saluteMixin from 'mixin';

<template>
  <button @click="salute()">Salute</button>
</template>

<script>
export default {
  name: 'Foo',
  mixins: [saluteMixin],
};
</script>
```

## Reference

https://v3.vuejs.org/guide/mixins.html#mixins
