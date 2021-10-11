const INITIAL_BIRDS = [
  'Pigeons',
  'Eagles',
  'Doves',
  'Parrots',
];

const INITIAL_PEOPLE = [
  { name: 'John', age: 20 },
  { name: 'Rick', age: 18 },
  { name: 'Amy', age: 33 },
];

const App = {
  data() {
    return {
      birds: INITIAL_BIRDS,
      people: INITIAL_PEOPLE,
    }
  }
};

const vm = Vue.createApp(App).mount('#app');
