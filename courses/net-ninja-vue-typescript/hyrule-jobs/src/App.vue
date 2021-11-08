<template>
  <div class="app">
    <h1 class="app__title">Hyrule Jobs</h1>
    <hr class="app__divider">
    <div class="app__controls">
      Sort by:
      &nbsp;
      <div class="controls__sortings">
        <button
          v-for="field in sortingFields"
          :key="field"
          type="button"
          @click="onSort(field)"
          class="sorter"
        >
          {{ field[0].toUpperCase() + field.slice(1) }}
        </button>
      </div>
    </div>
    <hr class="app__divider">
    <jobs-list :jobs="jobs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { Job, JobSortField } from '@/types';
import { compareDescendingKey } from '@/utils';
import { INITIAL_JOBS } from '@/consts';
import JobsList from '@/components/JobsList.vue';

export default defineComponent({
  name: 'App',
  components: {
    JobsList,
  },
  setup() {
    const jobs = ref<Job[]>(INITIAL_JOBS);
    const sortingFields = [
      JobSortField.Title,
      JobSortField.Location,
      JobSortField.Salary,
    ];

    const onSort = (sortBy: JobSortField): void => {
      switch (sortBy) {
        case JobSortField.Title:
          jobs.value = [...jobs.value].sort(compareDescendingKey('title'));
          break;
        case JobSortField.Location:
          jobs.value = [...jobs.value].sort(compareDescendingKey('location'));
          break;
        case JobSortField.Salary:
          jobs.value = [...jobs.value].sort(compareDescendingKey('salary'));
          break;
      }
    };

    return {
      jobs,
      onSort,
      sortingFields,
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

.app__controls {
  display: flex;
  align-items: center;
}

.controls__sortings {
  margin: 0 -0.5rem;
}

.controls__sortings * {
  margin: 0 0.5rem;
}

.sorter {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: var(--color-grey-dark);
  border: 2px solid currentColor;
  background: transparent;
  cursor: pointer;
  transition: 0.2s all ease-out;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1rem;
}

.sorter:hover {
  background-color: rgba(0,0,0,0.15);
}
</style>
