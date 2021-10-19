import { createStore } from 'vuex';

import { auth, usersCollection } from '@/plugins/firebase';

export default createStore({
  state: {
    showAuthModal: false,
    isUserLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.showAuthModal = !state.showAuthModal;
    },
    logIn: (state) => {
      state.isUserLoggedIn = true;
    },
    logOut: (state) => {
      state.isUserLoggedIn = false;
    },
  },
  actions: {
    async register({ commit }, payload) {
      await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password,
      );

      await usersCollection.add({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      commit('logIn');
    },
  },
  // modules: {
  // },
});
