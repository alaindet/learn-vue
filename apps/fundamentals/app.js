const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Alain',
      lastName: 'D\'Ettorre',
    };
  },
  methods: {
    // Cannot use arrow function since this and getters are used
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
}).mount('#app');
