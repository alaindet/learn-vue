<template>
  <ul v-if="todos?.length">
    <li v-for="todo in todos" :key="todo">
      {{ todo }}
    </li>
  </ul>
  <div v-else>No todos yet, add a new one!</div>
</template>

<script>
export default {
  name: 'Todos',
  props: {
    todos: {
      // https://v3.vuejs.org/guide/component-props.html#type-checks
      // - String
      // - Number
      // - Boolean
      // - Array
      // - Object
      // - Date
      // - Function
      // - Symbol
      type: Array,
      // type: [Number, String], // Example with multiple types
      required: true,
      default() {
        return ['Enter new todos...'];
      },
      // Note: Validators run before the component instance is created
      // So it cannot access to data, computed data or methods
      // Which implies an arrow function will work better
      validator: value => !!value,
    },
  },
  // Without types
  // props: ['todos'],
}
</script>
