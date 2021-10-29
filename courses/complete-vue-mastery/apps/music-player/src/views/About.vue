<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      This page imports a Vuex module with lazy-loading and
      maps its state to a computed property.
    </p>
    <code>state.foo = {{ foo }}</code>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import dummyModule from '@/store/modules/dummy.lazy';

export default {
  created() {
    const store = this.$store;
    if (!(store && store.state && store.state.dummy)) {
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
