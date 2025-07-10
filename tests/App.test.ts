import { shallowMount } from '@vue/test-utils';
import App from '../src/App.vue';
import router from '../src/router';

describe('<App /> Component', () => {
  it('renders the component', () => {
    // mount the App component
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });

    const routerView = wrapper.findComponent({ name: 'RouterView' });
    expect(routerView.exists()).toBe(true);
  });
});
