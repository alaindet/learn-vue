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
  props: [
    'todos',
  ],
}
</script>
