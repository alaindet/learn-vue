<script setup lang="ts">
import { reactive } from 'vue';

const items = reactive([
  { title: 'Foo', isDone: false },
  { title: 'Bar', isDone: true },
  { title: 'Baz', isDone: false },
]);

const tasks = reactive([
  {
    desc: 'Go to supermarket',
    subtasks: [
      { desc: 'Buy sugar' },
      { desc: 'Buy bread' },
    ],
  },
  { desc: 'Go to dentist' },
]);

const book = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2022-10-14'
});

</script>

<template>
  <ul>

    <!-- Basic -->
    <!-- <li v-for="item in items">
      <input type="checkbox" :checked="item.isDone" />
      <span>{{ item.title }}</span>
    </li> -->

    <!-- Of syntax (similar to JS and Angular) -->
    <!-- <li v-for="item of items">
      {{ item.title }}
    </li> -->

    <!-- With index -->
    <!-- <li v-for="(item, index) in items">
      <input type="checkbox" :checked="item.isDone" />
      <span>#{{ index }} {{ item.title }}</span>
    </li> -->

    <!-- With destructuring -->
    <!-- <li v-for="({ title, isDone }, index) in items">
      <input type="checkbox" :checked="isDone" />
      <span>#{{ index }} {{ title }}</span>
    </li> -->

    <!-- Nested -->
    <!-- <li v-for="{ desc, subtasks } in tasks">
      {{ desc }}
      <ul v-if="subtasks?.length">
        <li v-for="{ desc } in subtasks">{{ desc }}</li>
      </ul>
    </li> -->

    <!-- With object (only value) -->
    <!-- <li v-for="value in book">
      {{ value }}
    </li> -->

    <!-- With object (value, key) -->
    <!-- <li v-for="(value, key) in book">
      <strong>{{ key }}</strong>: {{ value }}
    </li> -->

    <!-- With object (value, key, index) -->
    <!-- <li v-for="(value, key, index) in book">
      {{ index }}# <strong>{{ key }}</strong>: {{ value }}
    </li> -->

    <!-- Generate a range from 1 (ONE!) to N (= 10) -->
    <!-- <li v-for="i in 10">{{ i }}</li> -->

    <!-- Render multiple stuff without a wrapper -->
    <!-- Similar to <ng-container> from Angular -->
    <!-- <li>
      Render multiple items at once
      <ul>
        <template v-for="item in items">
          <li>{{ item.title }}</li>
          <li class="divider" role="presentation"></li>
        </template>
      </ul>
    </li> -->

    <!-- Loops and conditionals together -->
    <!-- Avoid v-if and v-for together on an element at all costs! -->
    <!-- <template v-for="item in items">
      <li v-if="!item.isDone">
        {{ item.title }}
      </li>
    </template> -->

    <!-- Providing keys for tracking (animation, performance) -->
    <!-- <li v-for="item in items" :key="item.title">{{ item.title }}</li> -->

  </ul>
</template>
