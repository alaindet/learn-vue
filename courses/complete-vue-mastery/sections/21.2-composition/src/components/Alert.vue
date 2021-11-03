<template>
  <div>
    This is {{ isBob ? '' : 'NOT' }} Bob.
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'Alert',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const isBob = computed(() => {
      return props.user.name === 'Bob';
    });

    return {
      isBob,
    };
  },
}
</script>
