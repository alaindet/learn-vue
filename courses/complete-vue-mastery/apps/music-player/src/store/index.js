import { createStore } from 'vuex';
import { Howl } from 'howler';

import { auth, usersCollection } from '@/plugins/firebase';
import { State, Mutation, Action } from './enums';

export default createStore({
  state: {
    [State.ShowAuthModal]: false,
    [State.IsUserLoggedIn]: false,
    [State.CurrentSong]: null,
    [State.Sound]: null,
  },

  mutations: {
    [Mutation.ToggleAuthModal]: (state) => {
      state[State.ShowAuthModal] = !state[State.ShowAuthModal];
    },
    [Mutation.LogIn]: (state) => {
      state[State.IsUserLoggedIn] = true;
    },
    [Mutation.LogOut]: (state) => {
      state[State.IsUserLoggedIn] = false;
    },
    [Mutation.StartNewSong]: (state, payload) => {
      state[State.CurrentSong] = payload;
      state[State.Sound] = new Howl({
        src: [payload.url],
        html5: true,
      });
    },
  },

  actions: {
    [Action.Register]: async ({ commit }, payload) => {
      const userCredentials = await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password,
      );

      await usersCollection.doc(userCredentials.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      await userCredentials.user.updateProfile({
        displayName: payload.name,
      });

      commit(Mutation.LogIn);
    },

    [Action.InitializeLogin]: ({ commit }) => {
      const user = auth.currentUser;
      if (user) {
        commit(Mutation.LogIn);
      }
    },

    [Action.LogIn]: async ({ commit }, payload) => {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);
      commit(Mutation.LogIn);
    },

    [Action.LogOut]: async ({ commit }) => {
      await auth.signOut();
      commit(Mutation.LogOut);
    },

    [Action.StartNewSong]: async ({ commit, state }, payload) => {
      commit(Mutation.StartNewSong, payload);
      state[State.Sound].play();
    },
  },

  // modules: {
  // },
});
