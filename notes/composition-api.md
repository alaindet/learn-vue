# Composition API

It's a new way of organizing and reusing code in Vue. Its main features are

- Better TypeScript support
- Organization (related code is close)
- Reusability (hooks are better than mixins)

## `setup()`

The `setup()` method of a Vue component defines all the reactivity of the compoent and then returns an object with the *public properties and methods* available to the template

## Example
- Non-reactive example: the `counter` will not update as it is not reactive
  ```vue
  <template>
    <div>
      <button @click="increment">Increment</button>
      <p>{{ counter }}</p>
    </div>
  </template>

  <script>
  export default {
    name: 'App',
    setup() {
      let counter = 42;
      const increment = () => counter++;
      return { counter, increment };
    },
  };
  </script>
  ```

- Reactive example: Same as before, but `ref` tells Vue to keep track of `counter`
  ```vue
  <template>
    <div>
      <button @click="increment">Increment</button>
      <p>{{ counter }}</p>
    </div>
  </template>

  <script>
  import { ref } from 'vue';

  export default {
    name: 'App',
    setup() {
      const counter = ref(42);
      const increment = () => counter.value++;
      return { counter, increment };
    },
  };
  </script>
  ```
