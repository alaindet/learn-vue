const App = {

  data() {
    return {
      message: 'The time is: ' + (new Date()).toISOString(),
    }
  },

  methods: {
    updateTime() {
      this.message = 'The time is: ' + (new Date()).toISOString();
    }
  },

  beforeCreate() {
    console.log('LIFECYCLE HOOK: beforeCreate', this.message);
  },

  // Creation: Vue instance creation
  // Use it to access data
  // ~ Angular's ngOnInit
  created() {
    console.log('LIFECYCLE HOOK: created', this.message);
  },

  beforeMount() {
    console.log('LIFECYCLE HOOK: beforeMount', this.$el);
  },

  // Mounting: compiled template, mounted and rendered into the DOM
  // Use it to alter the rendered template
  // ~ Angular's ngAfterViewInit
  mounted() {
    console.log('LIFECYCLE HOOK: mounted', this.$el);
  },

  // Triggered before updating any data from the "data" instance property
  // Cannot discriminate what property changed! :(
  beforeUpdate() {
    console.log('LIFECYCLE HOOK: beforeUpdate');
  },

  // ~ Angular's ngOnChanges
  updated() {
    console.log('LIFECYCLE HOOK: updated');
  },

  beforeUnmount() {
    console.log('LIFECYCLE HOOK: beforeUnmount');
  },

  // ~ Angular's ngOnDestroy
  unmounted() {
    console.log('LIFECYCLE HOOK: unmounted');
  },

};

const vm = Vue.createApp(App);

vm.mount('#app');
