import { shallowMount, RouterLinkStub } from '@vue/test-utils';

import SongItem from '@/components/SongItem.vue';

describe('SongItem.vue', () => {
  test('render song.displayName', () => {
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

  test('render song.docId and id attribute', () => {
    const song = {
      docId: 'mycoolsongid',
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
    expect(wrapper.attributes().id).toBe(`song-id-${song.docId}`);
  });

  test('render a dynamic class', () => {
    const song = {
      docId: 'mycoolsongid',
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
    expect(wrapper.classes()).toContain('some-dynamic-class');
  });
});
