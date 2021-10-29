<template>
  <div>
    <app-header />

    <!-- Plain router -->
    <!-- <router-view></router-view> -->

    <!-- Router with transition -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>

    <app-player />
    <app-auth-modal />
  </div>
</template>

<script>
import { Prefix, Action } from '@/store/modules/auth';
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
    this.$store.dispatch(`${Prefix}/${Action.InitializeLogin}`);
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.15s linear;
}
.fade-leave-to {
  transition: all 0.15s linear;
  opacity: 0;
}
</style>
