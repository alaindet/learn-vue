<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">

      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">
        Music
      </a>

      <div class="flex flex-grow items-center">

        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <li v-if="!isUserLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">
              Login / Register
            </a>
          </li>
          <template v-else>
            <li>
              <a class="px-2 text-white" href="#">
                Manage
              </a>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="logOut">
                Logout
              </a>
            </li>
          </template>
        </ul>

      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

import { State, Mutation, Action } from '@/store/enums';

// TODO: Use aliases for mapped store features
export default {
  name: 'Header',
  computed: {
    ...mapState([State.IsUserLoggedIn]),
  },
  methods: {
    ...mapMutations([Mutation.ToggleAuthModal]),
    ...mapActions([Action.LogOut]),
  },
};
</script>
