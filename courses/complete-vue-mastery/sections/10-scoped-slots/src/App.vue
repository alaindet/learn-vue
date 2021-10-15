<template>
  <div id="app">
    <hello-world>

      <!--
      <template v-slot="slotProps">
        <p>Hello {{ slotProps.user.name }}!</p>
      </template>
      -->

      <!--
      <template #default="slotProps">
        <p>Hello {{ slotProps.user.name }}</p>
      </template>
      -->

      <!--
      <template #default="{ user }">
        <p>Hello {{ user.name }}</p>
      </template>
      -->

      <!-- Default slot -->
      <template #default="{ user }">
        <p>Hello {{ user.name }}</p>
      </template>

      <!-- Named slot: favorites -->
      <template #favorites="{ favorites }">
        <ul>
          <li v-for="fav in favorites" :key="fav">
            {{ fav }}
          </li>
        </ul>
      </template>

    </hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
