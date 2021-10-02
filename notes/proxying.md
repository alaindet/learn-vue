- When you declare a property of the `data` object, Vue automatically creates getter and setters for that property
  ```js
  const vm = Vue.createApp({
    data() {
      return {
        color: 'red',
      };
    }
  }).mount('#app');

  vm.$data.color = 'blue'; // Direct
  vm.color = 'blue'; // Using setter

  vm.$data.color; // Direct
  vm.color; // Using getter
  ```
