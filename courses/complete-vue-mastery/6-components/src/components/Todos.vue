<template>
  <ul>
    <li v-for="todo in todos" :key="todo">
      {{ todo }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Todos',
  props: [
    'todos',
  ],
}
</script>
