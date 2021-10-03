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
  methods: {
    // Cannot use arrow function since this and getters are used
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
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
