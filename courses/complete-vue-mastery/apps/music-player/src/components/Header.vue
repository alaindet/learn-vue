<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">

      <!--
        Link to named path example
        <router-link :to="{ name: 'home' }">Home</router-link>
      -->

      <!--
        # App Name
        ==========
        You can override the exact-active class locally.
        In this case, a dummy ".no-active" class is set without any CSS rules
        declared, so that styling doesn't change when the link is active
      -->
      <router-link
        to="/"
        exact-active-class="no-active"
        class="text-white font-bold uppercase text-2xl mr-4"
      >
        Music
      </router-link>

      <div class="flex flex-grow items-center">

        <!-- Primary Navigation -->
        <ul class="flex flex-grow flex-row mt-1">
          <li>
            <router-link to="/about" class="px-2 text-white">
              About
            </router-link>
          </li>
          <li v-if="!isUserLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">
              Login / Register
            </a>
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" to="/manage">
                Manage
              </router-link>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="onSignOut">
                Logout
              </a>
            </li>
          </template>
        </ul>

        <!-- Language menu -->
        <ul class="flex mt-1">
          <li>
            <a href="#" class="px-2 text-white" @click.prevent="toggleLocale">
              {{ currentLocale }}
            </a>
          </li>
        </ul>

      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

import { State, Mutation, Action } from '@/store/enums';

// TODO: Use aliases for mapped store features
export default {
  name: 'Header',
  computed: {
    ...mapState([State.IsUserLoggedIn]),
    currentLocale() {
      return (this.$i18n.locale === 'en') ? 'English' : 'Italiano';
    },
  },
  methods: {
    ...mapMutations([Mutation.ToggleAuthModal]),
    onSignOut() {
      this.$store.dispatch(Action.LogOut);

      if (this.$route?.meta?.requiresAuth) {
        this.$router.push('/');
        // this.$router.push({ name: 'home' });
      }
    },
    toggleLocale() {
      this.$i18n.locale = (this.$i18n.locale === 'en') ? 'it' : 'en';
    },
  },
};
</script>
