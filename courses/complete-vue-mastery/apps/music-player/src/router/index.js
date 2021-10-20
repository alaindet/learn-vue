import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Manage from '@/views/Manage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    // component: () => import('../views/About.vue'), // Lazy-loading
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage,
    // component: () => import('../views/Manage.vue'), // Lazy-loading
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

export default router;
