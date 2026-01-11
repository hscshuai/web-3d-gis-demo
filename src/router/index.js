import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
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
