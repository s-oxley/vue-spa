import { shallowMount } from '@vue/test-utils';
import router from '@/router';
import LandingLayout from '@/modules/landing/layouts/LandingLayout.vue';
import { RouterView } from 'vue-router';

describe('<LandingLayout />', () => {
  it('renders the component', () => {
    // Mount the LandingLayout component
    const wrapper = shallowMount(LandingLayout, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('main').exists()).toBe(true);
    expect(wrapper.find('footer').exists()).toBe(true);
    expect(wrapper.find('footer').html()).toContain(
      `${new Date().getFullYear()} Acme Corporation. Derechos reservados.`,
    );
    // expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true);
    expect(wrapper.findComponent(RouterView).exists()).toBe(true);
  });
});
