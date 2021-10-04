const App = {

  data() {
    return {
      message: 'Hello world!',
    }
  },

  beforeCreate() {
    console.log('LIFECYCLE HOOK: beforeCreate', this.message);
  },

  created() {
    console.log('LIFECYCLE HOOK: created', this.message);
  },

  beforeMount() {
    console.log('LIFECYCLE HOOK: beforeMount', this.$el);
  },

  mounted() {
    console.log('LIFECYCLE HOOK: mounted', this.$el);
  }

};

const vm = Vue.createApp(App);

vm.mount('#app');
