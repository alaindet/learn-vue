import { createStore } from 'vuex';
import auth, { Prefix, State, Mutation } from '@/store/modules/auth';

// Mock Firebase dependency
jest.mock('@/plugins/firebase', () => { });

describe('Vuex store mutations', () => {
  test(`${Mutation.ToggleAuthModal} mutation sets ${State.IsUserLoggedIn} to true`, () => {
    const store = createStore({ modules: { auth } });
    expect(store.state[Prefix][State.ShowAuthModal]).toBe(false);
    store.commit(`${Prefix}/${Mutation.ToggleAuthModal}`);
    expect(store.state[Prefix][State.ShowAuthModal]).toBe(true);
  });
});
