import { shallowMount } from '@vue/test-utils';

import Home from '@/views/Home.vue';
import SongItem from '@/components/SongItem.vue';

// Mock Firebase dependency
jest.mock('@/plugins/firebase', () => {});

describe('Home.vue', () => {
  test('render a list of songs', () => {

    // Mock songs
    const songs = [
      { url: 'someurl1' },
      { url: 'someurl2' },
      { url: 'someurl3' },
    ];

    // Mock a side effect method
    Home.methods.fetchSongs = () => null;

    const component = shallowMount(Home, {
      data() {
        return {
          songs,
        };
      },
      global: {
        mocks: {
          // Mock the translation function
          $t: (message) => message,
        },
      },
    });

    const items = component.findAllComponents(SongItem);

    expect(items).toHaveLength(songs.length);

    items.forEach((childComponent, i) => {
      expect(childComponent.props().song).toStrictEqual(songs[i])
    });
  });
});
