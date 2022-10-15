<script setup lang="ts">
import { ref } from 'vue';

import LifecycleSpy from './life-cycle-spy.vue';

const showLifecycleSpy = ref(false);
</script>

<template>
  <LifecycleSpy v-if="showLifecycleSpy" />
  <div>
    <button @click="showLifecycleSpy = !showLifecycleSpy">
      Toggle lifecycle spy
    </button>
  </div>
</template>
