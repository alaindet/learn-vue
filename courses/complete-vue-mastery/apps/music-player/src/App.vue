<template>
  <div>
    <app-header />
    <router-view></router-view>
    <app-player />
    <app-auth-modal />
  </div>
</template>

<script>
import { Action } from '@/store/enums';
import AppAuthModal from './components/AuthModal.vue';
import AppHeader from './components/Header.vue';
import AppPlayer from './components/Player.vue';

export default {
  name: 'App',
  components: {
    AppAuthModal,
    AppHeader,
    AppPlayer,
  },
  created() {
    this.$store.dispatch(Action.InitializeLogin);
  },
};
</script>
