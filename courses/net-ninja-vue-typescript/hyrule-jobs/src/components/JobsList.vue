<template>
  <ul class="jobs">
    <li v-for="job in sortedJobs" :key="job.id" class="job">
      <h2 class="job__title">{{ job.title }}</h2>
      <h3 class="job__location">{{ job.location }}</h3>
      <div class="job__salary">
        {{ job.salary}} rupees
      </div>
      <div class="job__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod facilis vitae animi alias porro tempore, laborum eum neque praesentium nesciunt exercitationem necessitatibus! Suscipit delectus dolore iste asperiores necessitatibus error!
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import { Job, JobSortField } from '@/types';
import { compareDescendingKey } from '@/utils';

export default defineComponent({
  name: 'JobsList',
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
    // TODO: Create sortedJobs computed prop
    //   switch (newValue) {
    //     case JobSortField.Title:
    //       sortedJobs.value = [...props.jobs].sort(compareDescendingKey('title'));
    //       break;
    //     case JobSortField.Location:
    //       sortedJobs.value = [...props.jobs].sort(compareDescendingKey('location'));
    //       break;
    //     case JobSortField.Salary:
    //       sortedJobs.value = [...props.jobs].sort(compareDescendingKey('salary'));
    //       break;
    //   }

    return {
      sortedJobs,
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

.job {
  background: var(--color-white);
  margin: 1rem 0;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.job__title {
  margin-top: 0;
  margin-bottom: 1rem;
}

.job__location {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--color-grey-dark);
}

.job__salary {
  margin: 1rem 0;
  font-weight: bold;
  color:var(--color-success);
}

.job__description {
  font-size: 0.9em;
}
</style>
