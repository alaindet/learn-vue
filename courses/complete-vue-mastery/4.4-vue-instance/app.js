// With compiler (full build)
const vm = Vue.createApp({
  template: `
    <ztm-hello />
    <ztm-hello />
    <ztm-hello />
  `,
});

vm.component('ztm-hello', {
  template: `<p>{{ message }}</p>`,
  data() {
    return {
      message: 'Hello World',
    };
  }
});

vm.mount('#app');
