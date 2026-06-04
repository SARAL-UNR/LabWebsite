import { createRouter, createWebHistory } from 'vue-router'
import PublicationsPage from '@/pages/PublicationsPage.vue'
import HelloWorld from '@/pages/HelloWorld.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import PeoplePage from '@/pages/PeoplePage.vue'
import FundingPage from '@/pages/FundingPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld,
  },
  {
    path: '/publications',
    name: 'publications',
    component: PublicationsPage,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage,
  },
  {
    path: '/people',
    name: 'people',
    component: PeoplePage,
  },
  {
    path: '/funding',
    name: 'funding',
    component: FundingPage,
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router