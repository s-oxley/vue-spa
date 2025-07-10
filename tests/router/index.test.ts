import App from '@/App.vue';
import router from '@/router';
import { mount } from '@vue/test-utils';
import type { RouteLocationNormalized } from 'vue-router';

const wrapper = mount(App, {
  global: {
    plugins: [router],
  },
});

describe('Router', async () => {
  test('Renders HomePage when visiting /home', async () => {
    await router.push('/home');
    await router.isReady();

    expect(wrapper.html()).toContain('Aplicaciones de una sola página (SPA) con Vue 3 y Vite.');
  });

  test('Renders Features when visiting /features', async () => {
    await router.replace('/features');
    await router.isReady();

    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');
  });

  test('Renders Pricing when visiting /pricing', async () => {
    await router.replace('/pricing');
    await router.isReady();

    expect(wrapper.html()).toContain('Flexible');
  });

  test('Renders Contact when visiting /contact', async () => {
    await router.replace('/contact');
    await router.isReady();

    expect(wrapper.html()).toContain('Feedback');
  });

  it('Test renders Login when visiting /pokemon/151', async () => {
    localStorage.clear();
    await router.replace('/pokemon/151');
    await router.isReady();

    // console.log(wrapper.html());
    expect(wrapper.find('h1').attributes('class')).toBe('text-2xl font-semibold mb-4');
    expect(wrapper.find('h1').text()).toBe('Login');
  });

  test('Test renders Pokemon page when visiting /pokemon/151', async () => {
    localStorage.setItem('authentication', 'true'); // Simulate successful login
    await router.replace('/pokemon/151');
    await router.isReady();

    expect(wrapper.find('h1').text()).toBe('Pokemón # 151');
    expect(wrapper.find('img[class="w-[200px] h-[200px] mt-5"]').attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg',
    );
  });

  test('Should convert the segment into numbers', () => {
    const route: RouteLocationNormalized = {
      name: 'pokemon',
      params: { id: '44' },
      matched: [],
      fullPath: '/pokemon/44',
      query: {},
      hash: '',
      redirectedFrom: undefined,
      path: '/pokemon/44',
      meta: {},
    };

    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { id } = (pokemonRoute?.props as any).default(route);
    // console.log(`id pokemon: ${id}`);
    expect(id).toBe(44);
    expect(pokemonRoute).toBeDefined();
  });
});
