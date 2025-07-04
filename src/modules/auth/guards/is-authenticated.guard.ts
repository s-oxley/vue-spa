import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const isAuthenticatedGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem('authentication'); // Example check, replace with actual auth logic

  console.log('Authenticated: ', isAuthenticated);

  if (isAuthenticated === 'true') {
    next(); // Allow access to the route
  } else {
    next({ name: 'login' }); // Redirect to login page if not authenticated
  }
};
