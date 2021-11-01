import { shallowMount, RouterLinkStub } from '@vue/test-utils';

import SongItem from '@/components/SongItem.vue';

describe('Snapshots SongItem.vue', () => {
  test('renders correctly', () => {
    const song = {
      docId: 'abcdefg',
      modifiedName: 'song name',
      displayName: 'user name',
      commentsCount: 4,
    };

    const component = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: {
          'router-link': RouterLinkStub,
        },
      },
    });

    expect(component.element).toMatchSnapshot();
  });
});
