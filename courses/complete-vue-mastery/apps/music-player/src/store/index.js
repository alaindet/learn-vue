import { createStore } from 'vuex';

export default createStore({
  state: {
    showAuthModal: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.showAuthModal = !state.showAuthModal;
    },
  },
  // actions: {
  // },
  // modules: {
  // },
});
