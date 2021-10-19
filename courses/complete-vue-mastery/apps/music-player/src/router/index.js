import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
