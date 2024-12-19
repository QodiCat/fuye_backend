import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  mode: 'hash',
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/register',
      name: '登录注册',
      component: () => import('@/components/register.vue')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/components/index.vue')
    },
    {
      path: '/dashboard/:component?',
      name: 'Dashboard',
      component: () => import('@/components/dashboard.vue')
    },
    {
      path: '/tools/:component?',
      name: 'Tools',
      component: () => import('@/components/tools.vue')
    },
  ]
})

export default router