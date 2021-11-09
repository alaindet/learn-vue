<template>
  <div class="jobs-list-controls">
    Sort by:
    &nbsp;
    <div class="controls__sortings">
      <button
        v-for="field in sortingFields"
        :key="field"
        type="button"
        @click="onSort(field)"
        class="sorter"
        :class="{ '--active': field === sortingField }"
      >
        {{ field[0].toUpperCase() + field.slice(1) }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import { JobSortField } from '@/types';

export enum JobsListControlsEvent {
  SortingClicked = 'sortingClicked',
}

export default defineComponent({
  name: 'JobsListControls',
  props: {
    sortingField: {
      required: false,
      default: JobSortField.Title,
      type: String as PropType<JobSortField>,
    },
  },
  setup(props, context) {
    const sortingFields = [
      JobSortField.Title,
      JobSortField.Location,
      JobSortField.Salary,
    ];

    const onSort = (sortBy: JobSortField): void => {

      if (sortBy === props.sortingField) {
        return;
      }

      context.emit(JobsListControlsEvent.SortingClicked, sortBy);
    };

    return {
      sortingFields,
      onSort,
    };
  },
})
</script>

<style scoped>
.jobs-list-controls {
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

.sorter:hover,
.sorter:focus {
  background-color: rgba(0,0,0,0.15);
}

.sorter.--active {
  color: var(--color-success);
}
</style>
