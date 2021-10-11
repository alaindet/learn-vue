const INITIAL_PEOPLE = [
  {
    name: 'John',
    message: 'Hello world!'
  },
  {
    name: 'Rick',
    message: 'I like pie.'
  },
  {
    name: 'Amy',
    message: 'Skydiving is fun!'
  }
];

const App = {

  data() {
    return {
      people: INITIAL_PEOPLE,
    }
  },

  methods: {
    moveToBottom() {
      const firstPerson = this.people.shift();
      this.people.push(firstPerson);
    }
  },

};

const vm = Vue.createApp(App).mount('#app');
