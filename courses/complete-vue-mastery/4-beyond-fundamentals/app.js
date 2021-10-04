const App = {
  data() {
    return {
      message: 'Hello world!',
    }
  }
};

const vm = Vue.createApp(App);

// Delay instantiation of Vue
// const vm = Vue.createApp(App).mount('#app');
setTimeout(() => vm.mount('#app'), 2000);
