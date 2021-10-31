// mount allows any level of nesting by creating child components
// shallowMount allows no level of nesting, it does not create child components
// mount(..., { shallow: true }) is equal to shallowMount(...)
import { shallowMount } from '@vue/test-utils';

import About from '@/views/About.vue';

// Describe groups 2+ tests together in a test suite
describe('About.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(About);

    expect(wrapper.text()).toContain('about');
  });
});
