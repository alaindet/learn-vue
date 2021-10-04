const vm = Vue.createApp({

  data() {
    return {
      firstName: 'Alain',
      middleName: '',
      lastName: 'D\'Ettorre',
      googleUrl: 'https://google.com',
      rawGoogleUrl: 'Raw HTML <a href="https://google.com" target="_blank">&rarr; Google</a>',
      counter: 0,
    };
  },

  // Memoized derived information, these are synchronous
  computed: {
    fullName() {
      console.log('fullName');
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
  },

  // Perform side effects when some data changes, these can be asynchronous
  watch: {
    counter(newValue, oldValue) {
      console.log('Performing side effect on counter change...');
    }
  },

  // Cannot use arrow functions here since this and getters are used
  methods: {
    incrementCounter() {
      this.counter += 1;
    },
    updateFirstName(event) {
      this.firstName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },

}).mount('#app');
