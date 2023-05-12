import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout
    }
  ]
})

export default router
