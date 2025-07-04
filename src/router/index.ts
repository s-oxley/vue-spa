import { isAuthenticatedGuard } from '@/modules/auth/guards/is-authenticated.guard';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import NotPage from '@/modules/landing/pages/NotPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

// https://router.vuejs.org/guide/#Registering-the-router-plugin

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        { path: '/home', name: 'home', component: HomePage },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticatedGuard],
          // props: true, // Enable route params as props
          props: (route) => {
            // console.log({ route });
            const id = +route.params.id;
            return isNaN(id) ? { id: 1 } : { id };
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'login' }, // '/login', // Redirect to login by default
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotPage,
    }, // Redirect any unmatched routes to home
  ],
});

export default router;
