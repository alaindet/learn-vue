const vm = Vue.createApp({

  data() {
    return {
      circleBackgroundColor: 'background-green',
      circleTextColor: 'text-white',
      size: 150,
    };
  },

  computed: {
    circleCssClasses() {
      return [
        this.circleBackgroundColor ?? '',
        this.circleTextColor ?? '',
      ];
    },
    circleCssStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        'line-height': `${this.size}px`,
      };
    }
  },

}).mount('#app');
