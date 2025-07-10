import NotPage from '@/modules/landing/pages/NotPage.vue';
import { mount, RouterLinkStub } from '@vue/test-utils';
import { RouterLink } from 'vue-router';

describe('<NotPage />', () => {
  it('should render the NotPage component', () => {
    const wrapper = mount(NotPage, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findComponent(RouterLink).exists()).toBe(true);
  });
});
