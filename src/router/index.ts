import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Ressourcen from '@/views/Ressourcen.vue'
import Pipelines from '@/views/Pipeline.vue'
import Code from '@/views/Code.vue'
import Organisatorisch from '@/views/Organisatorisch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/ressourcen',
      name: 'Ressourcen',
      component: Ressourcen
    },
    {
      path: '/pipelines',
      name: 'Pipelines',
      component: Pipelines
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/organisatorisch',
      name: 'Organisatorisch',
      component: Organisatorisch
    }
  ]
})

export default router
