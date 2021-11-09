<template>
  <ul class="jobs">
    <transition-group name="jobs-transition-group">
      <job-item
        v-for="job in sortedJobs"
        :key="job.id"
        :job="job"
        :isOpen="!!openItems[job.id]"
        @toggleClicked="onToggleItem(job.id)"
      />
    </transition-group>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from 'vue';

import { Job, JobSortField } from '@/types';
import { compareAscendingKey, compareDescendingKey } from '@/utils';
import JobItem from '@/components/JobItem.vue';

export default defineComponent({
  name: 'JobsList',
  components: {
    JobItem,
  },
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>,
    },
    sortingField: {
      required: true,
      default: JobSortField.Title,
      type: String as PropType<JobSortField>,
    },
  },
  setup(props) {

    const sortedJobs = computed(() => {
      switch (props.sortingField) {
        case JobSortField.Title:
          return [...props.jobs].sort(compareAscendingKey('title'));
        case JobSortField.Location:
          return [...props.jobs].sort(compareAscendingKey('location'));
        case JobSortField.Salary:
          return [...props.jobs].sort(compareDescendingKey('salary'));
        default:
          return props.jobs;
      }
    });

    const openItems = reactive<{ [id: string]: boolean }>({});
    const onToggleItem = (id: string): void => {
      openItems[id] = openItems[id] ? false : true;
    };

    return {
      sortedJobs,
      openItems,
      onToggleItem,
    };
  },
})
</script>

<style scoped>
.jobs {
  padding: 0;
  margin: 0;
  list-style: none;
}

.jobs-transition-group-enter-active {
  transform: scale(1.1);
  transition: 0.2s all ease-out;
}

/* Vue applies *-move to any moving element in a <transition-group> */
.jobs-transition-group-move {
  transition: 0.2s all linear;
}
</style>
