import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/PlayerProfile.vue'),
    children: [
      {
        path: '/profile/estatisticas',
        name: 'estatisticas',
        component: () => import('@/components/Statistics.vue'),
      },
      {
        path: '/profile/cartas',
        name: 'cartas',
        component: () => import('@/components/Cartas.vue'),
      },
    ],
  },
  {
    path: '/clan',
    name: 'clan',
    component: () => import('@/views/Clan.vue'),
    children: [
      {
        path: '/clan/edit',
        name: 'edit-member',
        component: () => import('@/components/Edit.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
