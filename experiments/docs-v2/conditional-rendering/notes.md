# Conditional rendering

## `v-if`
- `v-if` is a built-in directive which inserts/removes an element from the DOM
- It should now be used for frequent hide/show toggling as it's an expensive operation

## `v-else-if`, `v-else`
- `v-else-if` and `v-else` must immediately follow `v-if` on subsequent HTML siblings

## `key`
- The `key` attribute can be used to give a unique name to an HTML element
- This way, Vue will never try to reuse two identical HTML elements with different keys between re-renderings
- It is very important with `<input>`s since reused inputs preserve their state instead of resetting it
- For example, a wizard component showing very similar and/or identical inputs without different `key`s could reuse some inputs creating havoc
- ```html
  <div id="app">
    <p>This reuses the input while toggling <code>v-if</code></p>
    <input v-if="show" type="text" name="foo">
    <input v-else type="text" name="foo">
    <hr>
    <p>This does not</p>
    <input v-if="show" type="text" name="foo" key="foo1">
    <input v-else type="text" name="foo" key="foo2">
  </div>
  ```

## `v-show`
- It's a lightweight `v-if` that just toggles the `display` CSS property
- Does not work on `<template>` and with `v-else`
