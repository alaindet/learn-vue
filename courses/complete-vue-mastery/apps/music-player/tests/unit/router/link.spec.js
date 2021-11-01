import { shallowMount, RouterLinkStub } from '@vue/test-utils';

import SongItem from '@/components/SongItem.vue';

describe('Router links', () => {
  test('renders router link', () => {
    const song = {
      docId: 'abcdefg',
    };

    const component = shallowMount(SongItem, {
      props: {
        song,
      },
      global: {
        components: {
          'router-link': RouterLinkStub,
        },
      },
    });

    const linkComponent = component.findComponent(RouterLinkStub);
    expect(linkComponent.props().to).toEqual('/song/abcdefg');
  });
});
