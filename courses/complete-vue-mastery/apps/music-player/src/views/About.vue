<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ foo }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import dummyModule from '@/store/modules/dummy.lazy';

export default {
  created() {
    const store = this.$store;
    if (!(store && store.state && store.state['dummy'])) {
      store.registerModule('dummy', dummyModule);
    }
  },
  computed: {
    ...mapState('dummy', {
      foo: (state) => state.foo,
    }),
  },
};
</script>
