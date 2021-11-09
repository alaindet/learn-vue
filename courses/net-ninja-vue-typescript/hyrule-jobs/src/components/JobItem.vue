<template>
  <li
    class="job"
    :class="{ '--open': isOpen }"
    @click="onToggleItem(!isOpen)"
  >
    <h2 class="job__title">{{ job.title }}</h2>
    <h3 class="job__location">{{ job.location }}</h3>
    <div class="job__salary">{{ job.salary}} rupees</div>
    <div class="job__handle">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 18 18">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>
    <div class="job__description" v-if="isOpen">{{ job.description }}</div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Job } from '@/types';

export enum JobItemEvents {
  ToggleClicked = 'toggleClicked',
}

export default defineComponent({
  name: 'JobItem',
  props: {
    job: {
      required: true,
      type: Object as PropType<Job>,
    },
    isOpen: {
      required: true,
      type: Boolean,
    },
  },
  setup(props, context) {
    const onToggleItem = (status: boolean): void => {
      context.emit(JobItemEvents.ToggleClicked, status);
    };

    return {
      onToggleItem,
    };
  },
});
</script>

<style scoped>
.job {
  background: var(--color-white);
  margin: 1rem 0;
  padding: 1.5rem;
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-right: 3rem;
  transition: 0.15s all ease-out;
  border: 2px solid transparent;
  cursor: pointer;
}

.job:hover,
.job.--open {
  border-color: var(--color-grey);
}

.job:hover .job__handle {
  color: black;
}

.job__title {
  margin-bottom: 1rem;
  flex-grow: 1;
  margin: 0;
}

.job__location {
  padding: 0 0.5rem;
  font-size: 1em;
  margin-bottom: 1rem;
  color: var(--color-grey-dark);
  margin: 0;
}

.job__salary {
  padding: 0 0.5rem;
  font-weight: bold;
  color:var(--color-success);
  margin: 0;
}

.job__handle {
  position: absolute;
  font-size: 2rem;
  top: 1.3rem;
  right: 1.3rem;
  cursor: pointer;
  transform-origin: center center;
  transition: 0.15s all ease-out;
}

.job.--open .job__handle {
  transform: rotate(-180deg);
  color: var(--color-success);
}

.job__description {
  font-size: 0.9em;
  flex-basis: 100%;
}
</style>
