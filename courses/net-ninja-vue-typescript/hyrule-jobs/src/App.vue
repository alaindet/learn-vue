<template>
  <div class="app">
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
