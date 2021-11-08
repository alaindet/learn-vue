<template>
  <div class="app">
    <h1 class="app__title">Hyrule Jobs</h1>
    <hr class="app__divider">
    <jobs-list-controls
      :sortingField="sortingField"
      @sortingClicked="onSort($event)"
    />
    <hr class="app__divider">
    <jobs-list :jobs="jobs" :sortingField="sortingField" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

import { Job, JobSortField } from '@/types';
import { INITIAL_JOBS } from '@/consts';
import JobsList from '@/components/JobsList.vue';
import JobsListControls from '@/components/JobsListControls.vue';

export default defineComponent({
  name: 'App',
  components: {
    JobsList,
    JobsListControls,
  },
  setup() {
    const jobs = ref<Job[]>(INITIAL_JOBS);
    const sortingField = ref<JobSortField>(JobSortField.Title);
    const onSort = (sortBy: JobSortField) => sortingField.value = sortBy;

    watch(sortingField, (newVal) => {
      console.log('sortingField', newVal);
    });

    return {
      jobs,
      sortingField,
      onSort,
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
