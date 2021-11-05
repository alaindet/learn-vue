<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>User is {{ $route.params.user }}</h2>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const user = ref(null);
    const route = useRoute();
    const router = useRouter();
    user.value = route.params.user ?? null;

    // Add a hash fragment to the current route
    router.push({ hash: '#test' });
  },
};
</script>
