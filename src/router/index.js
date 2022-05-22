import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ServiceView.vue')
    },
    {
      path: '/service1',
      name: 'service1',
      component: () => import('../views/Service1.vue')
    },
    {
      path: '/service2',
      name: 'service2',
      component: () => import('../views/Service2.vue')
    },
    {
      path: '/service3',
      name: 'service3',
      component: () => import('../views/Service3.vue')
    },
    {
      path: '/service4',
      name: 'service4',
      component: () => import('../views/Service4.vue')
    },
    {
      path: '/service5',
      name: 'service5',
      component: () => import('../views/Service5.vue')
    },
    {
      path: '/service6',
      name: 'service6',
      component: () => import('../views/Service6.vue')
    },
    {
      path: '/service7',
      name: 'service7',
      component: () => import('../views/Service7.vue')
    },
    {
      path: '/service8',
      name: 'service8',
      component: () => import('../views/Service8.vue')
    }
  ]
})

export default router
