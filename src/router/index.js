import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/IndexView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('@/views/ServiceView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/charge',
      name: 'charge',
      component: () => import('@/views/ChargeView.vue')
    }
  ]
})

export default router
