const vm = Vue.createApp({

  data() {
    return {
      circleBackgroundColor: 'background-green',
      circleTextColor: 'text-white',
    };
  },

  computed: {
    circleClasses() {
      return [
        this.circleBackgroundColor ?? '',
        this.circleTextColor ?? '',
      ];
    }
  },

}).mount('#app');
