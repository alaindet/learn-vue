<template>
  <div class="app">
    <h1 class="app__title">Hyrule Jobs</h1>
    <hr class="app__divider">
    <div class="app__controls">
      TODO: Sort Controls
    </div>
    <hr class="app__divider">
    <jobs-list :jobs="jobs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { Job } from '@/types';
import { INITIAL_JOBS } from '@/consts';
import JobsList from '@/components/JobsList.vue';

export default defineComponent({
  name: 'App',
  components: {
    JobsList,
  },
  setup() {
    const jobs = ref<Job[]>(INITIAL_JOBS);

    return {
      jobs,
    };
  },
});
</script>

<style scoped>
.app {
  max-width: 960px;
  margin: 40px auto;
}

.app__divider {
  margin-top: 3rem;
  margin-bottom: 3rem;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--color-background) 0%,
    var(--color-grey) 20%,
    var(--color-grey) 80%,
    var(--color-background) 100%
  );
  border: none;
}

.app__title {
  text-align: center;
}
</style>
