import { createRouter, createWebHistory } from 'vue-router';

import store from '@/store';
import { State } from '@/store/modules/auth';
// import Home from '@/views/Home.vue';
// import About from '@/views/About.vue';
// import Manage from '@/views/Manage.vue';
// import Song from '@/views/Song.vue';
// import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/manage',
    // This is an alias path that regularly matches
    // But the main path is still the reference (ex.: named links point to that)
    // alias: '/also-manage',
    name: 'manage',
    // Import with default name
    // component: () => import('@/views/Manage.vue'),
    // Import with assigned name (this will load together with Song.vue)
    component: () => import(/* webpackChunkName: "songChunk" */'@/views/Manage.vue'),
    // // Example route guard
    // beforeEnter: (to, from, next) => {
    //   console.log('route guard: /manage', from, to);
    //   next();
    // },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/song/:songid',
    name: 'song',
    // Import with default name
    // component: () => import('@/views/Song.vue'),
    // Import with assigned name (this will load together with Manage.vue)
    component: () => import(/* webpackChunkName: "songChunk" */'@/views/Song.vue'),
  },
  {
    path: '/redirect-me-please',
    redirect: '/',
    // Alternative
    // redirect: { name: 'home' },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/',
    // component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // Partial match CSS custom class (default: .router-link-active)
  // linkActiveClass: 'enter-class-here',
  // Exact match CSS custom class (default: .router-link-exact-active)
  linkExactActiveClass: 'text-yellow-500',
});

// // Example global guard
// router.beforeEach((to, from, next) => {
//   console.log('global guard');
//   console.log(from, to);
//   next();
// });

router.beforeEach((to, from, next) => {
  // Public routes
  if (!to.matched.some((route) => route.meta.requiresAuth)) {
    next();
    return;
  }

  // User is authorized
  if (store.state.auth[State.IsUserLoggedIn]) {
    next();
    return;
  }

  console.log('You are not allowed');
  next('/');
});

export default router;
