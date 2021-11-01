import { createStore } from 'vuex';
import { cloneDeep } from 'lodash';

import auth, { Prefix, State, Mutation, Action } from '@/store/modules/auth';

// Mock Firebase dependency
jest.mock('@/plugins/firebase', () => {
  return {
    auth: {
      // Return an already resolved Promise with no value
      signInWithEmailAndPassword: () => Promise.resolve(),
    },
  };
});

describe('Vuex auth module', () => {
  test(`${Mutation.ToggleAuthModal} mutation sets ${State.IsUserLoggedIn} to true`, () => {

    // ATTENTION
    // Creating a Vuex store from the same reference object creates two references
    // to the same store!
    const clonedAuth = cloneDeep(auth);
    const store = createStore({ modules: { auth: clonedAuth } });
    expect(store.state[Prefix][State.ShowAuthModal]).toBe(false);
    store.commit(`${Prefix}/${Mutation.ToggleAuthModal}`);
    expect(store.state[Prefix][State.ShowAuthModal]).toBe(true);
  });

  test(`${Action.LogIn} action sets ${State.IsUserLoggedIn}`, async () => {
    expect.assertions(2);
    const clonedAuth = cloneDeep(auth);
    const store = createStore({ modules: { auth: clonedAuth } });
    expect(store.state[Prefix][State.IsUserLoggedIn]).toBe(false);
    const payload = { email: '', password: '' };
    await store.dispatch(`${Prefix}/${Action.LogIn}`, payload);
    expect(store.state[Prefix][State.IsUserLoggedIn]).toBe(true);
  });
});
