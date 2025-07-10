import AuthLayout from '@/modules/auth/layouts/AuthLayout.vue';
import router from '@/router';
import { mount } from '@vue/test-utils';
import { RouterView } from 'vue-router';

describe('<AuthLayout />', () => {
  test('renders the component', () => {
    const wrapper = mount(AuthLayout, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(RouterView).exists()).toBe(true);
    const divs = wrapper.findAll('div');
    expect(divs.length).toBe(3);
    expect(divs[0].classes()).toEqual([
      'bg-gray-100',
      'flex',
      'justify-center',
      'items-center',
      'h-screen',
    ]);
    expect(divs[1].classes()).toEqual(['w-1/2', 'h-screen', 'hidden', 'lg:block']);
    expect(wrapper.find('img').classes()).toEqual(['object-cover', 'w-full', 'h-full']);
  });
});
