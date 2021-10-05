// With compiler (full build)
const vm = Vue.createApp({

  data() {
    return {
      message: 'The time is: ' + (new Date()).toISOString(),
    }
  },

  template: `
    {{ message }}
  `,

}).mount('#app');

// Without the compiler (runtime build)
// const app2 = Vue.createApp({

//   data() {
//     return {
//       message: 'The time is: ' + (new Date()).toISOString(),
//     }
//   },

//   render() {
//     // h = hyperscript
//     return Vue.h(
//       'h1',
//       this.message,
//     );
//   },

// }).mount('#app2');
