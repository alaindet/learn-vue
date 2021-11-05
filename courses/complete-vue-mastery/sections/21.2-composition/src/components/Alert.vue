<template>
  <div>
    ALERT: This is {{ isBob ? '' : 'NOT' }} Bob.
  </div>
</template>

<script>
import { computed, onMounted, onUpdated } from 'vue';

export const Event = {
  UserIsBob: 'userIsBob',
};

export default {
  name: 'Alert',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    onMounted(() => {
      if (props.user.name === 'Bob') {
        context.emit(Event.UserIsBob, props.user);
      }
    });

    onUpdated(() => {
      if (props.user.name === 'Bob') {
        context.emit(Event.UserIsBob, props.user);
      }
    });

    const isBob = computed(() => {
      return props.user.name === 'Bob';
    });

    return {
      isBob,
    };
  },
}
</script>
