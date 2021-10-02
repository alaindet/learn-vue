const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Alain',
      lastName: 'D\'Ettorre',
    };
  },
  methods: {
    // Cannot use arrow function
    // Here, getters are used
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
}).mount('#app');
