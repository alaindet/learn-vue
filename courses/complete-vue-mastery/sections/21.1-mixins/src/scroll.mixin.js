export default {
  data() {
    return {
      offset: 0,
    };
  },
  mounted() {
    console.log('Mixin mounted');
    window.addEventListener('scroll', this.updateScroll.bind(this));
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.offset = window.pageYOffset;
    },
  },
};
