import { shallowMount, RouterLinkStub } from '@vue/test-utils';

import SongItem from '@/components/SongItem.vue';

describe('SongItem.vue', () => {
  test('renders song.displayName', () => {
    const song = {
      displayName: 'my song',
    };

    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: {
          'router-link': RouterLinkStub,
        },
      },
    });

    const songAuthor = wrapper.find('.song-author');

    expect(songAuthor.text()).toBe(song.displayName);
  });
});
