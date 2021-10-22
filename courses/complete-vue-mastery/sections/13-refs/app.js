const app = Vue.createApp({
  data: () => ({
    title: 'Hello',
  }),
}).mount('#app')

// This changes rendered DOM, but it does *NOT* update the reactive
// data of the Vue instance!
app.$refs.greeting.innerText = 'Ciao mondo';
