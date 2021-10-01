Vue.createApp({
  data() {
    return {
      color: 'red',
    };
  }
}).mount('#app-1');

Vue.createApp({
  data() {
    return {
      color: 'blue',
    };
  }
}).mount('#app-2');
