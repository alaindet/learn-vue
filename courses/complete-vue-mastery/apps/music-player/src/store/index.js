import { createStore } from 'vuex';
import { Howl } from 'howler';

import { auth, usersCollection } from '@/plugins/firebase';
import {
  State, Mutation, Getter, Action,
} from './enums';

export default createStore({
  state: {
    [State.ShowAuthModal]: false,
    [State.IsUserLoggedIn]: false,
    [State.SongMetadata]: null,
    [State.SongInstance]: null,
    [State.SongDuration]: '00:00',
    [State.SongSeek]: '00:00',
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
      state[State.SongMetadata] = payload;
      state[State.SongInstance] = new Howl({
        src: [payload.url],
        html5: true,
      });
    },

    [Mutation.PlayOrPauseSong]: (state) => {
      const song = state[State.SongInstance];
      if (!song) return;
      if (song.playing()) song.pause();
      else song.play();
    },

    [Mutation.UpdateSongProgress]: (state) => {
      state[State.SongSeek] = state[State.SongInstance].seek();
      state[State.SongDuration] = state[State.SongInstance].duration();
    },
  },

  getters: {
    [Getter.SongIsPlaying]: (state) => {
      if (state[State.SongInstance]) {
        return state[State.SongInstance].playing();
      }
      return false;
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

    [Action.StartNewSong]: async ({ commit, state, dispatch }, payload) => {
      commit(Mutation.StartNewSong, payload);
      state[State.SongInstance].play();
      state[State.SongInstance].on('play', () => {
        requestAnimationFrame(() => {
          dispatch(Action.UpdateSongProgress);
        });
      });
    },

    [Action.PlayOrPauseSong]: async ({ commit }) => {
      commit(Mutation.PlayOrPauseSong);
    },

    [Action.UpdateSongProgress]: ({ commit, state, dispatch }) => {
      commit(Mutation.UpdateSongProgress);
      if (state[State.SongInstance].playing()) {
        requestAnimationFrame(() => {
          dispatch(Action.UpdateSongProgress);
        });
      }
    },
  },

  // modules: {
  // },
});
