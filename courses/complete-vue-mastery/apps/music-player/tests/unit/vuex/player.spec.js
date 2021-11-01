import player, { Prefix, State, Getter } from '@/store/modules/player';

describe('Vuex player module', () => {
  test(`${Getter.SongIsPlaying} returns true if a song is playing`, () => {
    const state = {
      [State.SongInstance]: {
        playing: () => true,
      },
    };
    const result = player.getters[Getter.SongIsPlaying](state);
    expect(result).toBe(true);
  });
});
