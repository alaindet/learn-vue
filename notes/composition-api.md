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

## `ref()` vs `reactive()`

- `ref()` is best used for primitives or when re-assigning objects instead of changing them
- `ref()` has a `.value` proxied property to access and change its value
- `reactive()` is best used for compound values (objects, arrays) which should not be re-assigned but are changed frequently
- `reactive()` does not need to be access via `.value`

References
- https://www.danvega.dev/blog/2020/02/12/vue3-ref-vs-reactive/
- https://stackoverflow.com/a/65262638

## `toRefs()`

- `toRefs()` converts a `reactive()` object into separate reactive references, one for each property of the object

## Lifecycle hooks

- Lifecycle hooks are normal functions starting with `on` and executing like their Options API counterparts
- The `beforeCreate()` and `created()` do not have Composition API counterparts because `setup()` runs after `beforeCreate()` but before `created()`
- **NOTE** Two hooks have been renamed
  - `beforeDestroy()` => `onBeforeUnmount()`
  - `destroyed()` => `onUnmounted()`
- Some hooks
  - `onBeforeMount()`
  - `onMounted()`
  - `onBeforeUpdate()`
  - `onUpdated()`
  - `onBeforeUnmount()`
  - `onUnmounted()`
  - `onActivated()`
  - `onDeactivated()`
