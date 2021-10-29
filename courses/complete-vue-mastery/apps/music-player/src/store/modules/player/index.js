import { createStore } from 'vuex';
import { Howl } from 'howler';

import utils from '@/utils';

export default {
  state: {
    [State.SongMetadata]: null,
    [State.SongInstance]: null,
    [State.SongDuration]: '--:--',
    [State.SongSeek]: '--:--',
    [State.SongPercentageProgress]: '0%',
  },
  getters: {
    [Getter.SongUrl]: (state) => state[State.SongMetadata]?.url ?? null,
    [Getter.IsSong]: (state) => !!state[State.SongMetadata],
    [Getter.SongIsPlaying]: (state) => {
      if (state[State.SongInstance]) {
        return state[State.SongInstance].playing();
      }
      return false;
    },
  },
  mutations: {
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
      const seek = state[State.SongInstance].seek();
      const duration = state[State.SongInstance].duration();
      const fraction = seek / duration;

      state[State.SongSeek] = utils.formatDuration(seek, 'mm:ss', 1);
      state[State.SongDuration] = utils.formatDuration(duration, 'mm:ss', 1);
      state[State.SongPercentageProgress] = `${(100 * fraction).toFixed(0)}%`;
    },
  },
  actions: {
    [Action.StartNewSong]: async ({ commit, state, dispatch }, payload) => {
      if (state[State.SongInstance] instanceof Howl) {
        state[State.SongInstance].unload();
      }
      commit(Mutation.StartNewSong, payload);
      state[State.SongInstance].play();
      state[State.SongInstance].on('play', () => {
        requestAnimationFrame(() => {
          dispatch(Action.UpdateSongProgress);
        });
      });
    },

    [Action.PlayOrPauseSong]: async ({ state, commit, dispatch }, payload = null) => {
      const song = state[State.SongInstance];
      const songMetadata = state[State.SongMetadata];

      if (!song && !payload) {
        return;
      }

      if (!song || (song && payload && songMetadata?.url !== payload?.url)) {
        dispatch(Action.StartNewSong, payload);
        return;
      }

      commit(Mutation.PlayOrPauseSong);
    },

    [Action.UpdateSongProgress]: ({ commit, state, dispatch }) => {
      commit(Mutation.UpdateSongProgress);
      if (!state[State.SongInstance].playing()) {
        return;
      }
      requestAnimationFrame(() => dispatch(Action.UpdateSongProgress));
    },

    [Action.MoveSeek]: ({ commit, state }, payload) => {
      const song = state[State.SongInstance];
      if (!song) {
        return;
      }
      const { left, right, clicked } = payload;
      const fraction = (clicked - left) / (right - left);
      const seconds = fraction * song.duration();
      const roundedSeconds = Math.round(seconds);
      song.seek(roundedSeconds);

      song.once('seek', () => {
        commit(Mutation.UpdateSongProgress);
      });
    },
  },
};
