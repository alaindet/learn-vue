<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <template v-if="showAbout">
      |
      <router-link to="/about/john">
        About John
      </router-link>
    </template>
  </div>
  <router-view />
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const showAbout = computed(() => store.getters.showAbout);

    onMounted(() => {
      setTimeout(() => {
        store.dispatch('setShowAbout', true);
      }, 2000);
    });

    return {
      showAbout,
    };
  },
};
</script>
