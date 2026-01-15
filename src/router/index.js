import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cesium',
      name: 'cesium',
      component: () => import('../views/cesium/index.vue'),
    },
    {
      path: '/supermap3d',
      name: 'supermap3d',
      component: () => import('../views/supermap3d/index.vue'),
    },
  ],
})

export default router
