import Vue from 'vue';
import VueRouter from 'vue-router';

// views
import Landing from '@/views/Landing.vue';
import PageNotFound from '@/views/404.vue';

// layouts
import MainLayout from '@/layouts/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    component: MainLayout,
    children: [
      {
        component: Landing,
        name: 'Landing',
        path: '/',
      },
      {
        component: () => import(/* webpackChunkName: "About" */ '@/views/About.vue'),
        name: 'about',
        path: '/about',
        redirect: '/',
      },
    ],
    path: '/',
  },
  {
    path: '*',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
export default router;
