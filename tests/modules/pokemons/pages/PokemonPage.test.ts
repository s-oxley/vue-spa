import { mount, RouterLinkStub } from '@vue/test-utils';
import PokemonPage from '@/modules/pokemons/pages/PokemonPage.vue';
import { RouterLink } from 'vue-router';

describe('<PokemonPage />', () => {
  const wrapper = mount(PokemonPage, {
    global: {
      stubs: {
        // RouterLink: true,
        RouterLink: RouterLinkStub,
      },
    },
    props: {
      id: 2,
    },
  });

  // console.log(wrapper.html());

  it('renders the component', () => {
    expect(wrapper.find('h1').text()).toBe('Pokemón # 2');
    expect(wrapper.find('img').attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
    );
  });

  it('should link next pokemon', () => {
    const link = wrapper.findComponent(RouterLink);
    // console.log(link.props('to'));
    expect(link.props('to')).toEqual({
      name: 'pokemon',
      params: { id: 3 },
    });
  });
});
