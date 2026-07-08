import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import PublicationsPage from '@/pages/PublicationsPage.vue'
import ResearchPage from '@/pages/ResearchPage.vue'
import PeoplePage from '@/pages/PeoplePage.vue'
import FundingPage from '@/pages/FundingPage.vue'
import OutreachPage from '@/pages/OutreachPage.vue'
import TeachingPage from '@/pages/TeachingPage.vue'
import IndividualPeoplePage from '@/pages/PeopleIndividualPage.vue'
import IndividualResearchPage from '@/pages/ResearchIndividualPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/publications',
    name: 'publications',
    component: PublicationsPage,
  },
  {
    path: '/research',
    name: 'research',
    component: ResearchPage,
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
  },
  {
    path: '/outreach',
    name: 'outreach',
    component: OutreachPage,
  },
  {
    path: '/teaching',
    name: 'teaching',
    component: TeachingPage,
  },
  {
    path: '/people/:slug',
    name: 'people-individual',
    component: IndividualPeoplePage,
  },
  {
    path: '/research/:slug',
    name: 'research-individual',
    component: IndividualResearchPage,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router