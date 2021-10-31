import { shallowMount } from '@vue/test-utils';

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
    });

    expect(wrapper.text()).toContain(song.displayName);
  });
});
