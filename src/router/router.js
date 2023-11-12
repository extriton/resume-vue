import Vue from 'vue'
import Router from 'vue-router'

import Resume from '@/views/Resume.vue'
import AboutPage from '@/views/AboutPage.vue'
import ResumePage from '@/views/ResumePage.vue'
import PortfolioPage from '@/views/PortfolioPage.vue'
import ContactsPage from '@/views/ContactsPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Resume,
      children: [
        {
          path: 'about',
          name: 'AboutPage',
          component: AboutPage,
        },
        {
          path: 'resume',
          name: 'ResumePage',
          component: ResumePage,
        },
        {
          path: 'portfolio',
          name: 'PortfolioPage',
          component: PortfolioPage,
        },
        {
          path: 'contacts',
          name: 'ContactsPage',
          component: ContactsPage,
        },
        {
          path: '*',
          redirect: '/about'
        }
      ]
    },
    {
      path: '*',
      redirect: '/resume'
    }
  ]
})
