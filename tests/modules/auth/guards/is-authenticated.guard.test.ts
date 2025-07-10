import { isAuthenticatedGuard } from '@/modules/auth/guards/is-authenticated.guard';
import { before } from 'node:test';
import type { RouteLocationNormalized } from 'vue-router';

describe('is-authenticated.guard', () => {
  before(() => {
    localStorage.clear();
  });

  const to: RouteLocationNormalized = {
    name: undefined,
    params: {},
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    path: '/home',
    meta: {},
  };

  const from: RouteLocationNormalized = {
    name: undefined,
    params: {},
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    path: '',
    meta: {},
  };
  const next = vi.fn();

  test('should not allow access to authenticated user', async () => {
    await isAuthenticatedGuard(to, from, next);
    expect(next).toHaveBeenCalledWith({ name: 'login' });
  });

  test('should called localStorage set item authetication', async () => {
    await isAuthenticatedGuard(to, from, next);
    const isAuthenticated = localStorage.getItem('authentication');
    expect(isAuthenticated).toBeNull();
  });

  test('should block fi not authenticated with spies', async () => {
    const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');

    await isAuthenticatedGuard(to, from, next);
    expect(getItemSpy).toHaveBeenCalledWith('authentication');
  });

  it('should allow access to authenticated user', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('true');

    await isAuthenticatedGuard(to, from, next);
    expect(next).toHaveBeenCalledWith();
  });
});
