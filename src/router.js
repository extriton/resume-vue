import Vue from 'vue'
import Router from 'vue-router'

import Resume from '@/views/Resume.vue'
import PageAbout from '@/components/PageAbout.vue'
import PageResume from '@/components/PageResume.vue'
import PagePortfolio from '@/components/PagePortfolio.vue'
import PageContacts from '@/components/PageContacts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/resume',
      component: Resume,
      children: [
        {
          path: '',
          redirect: 'about'
        },
        {
          path: 'about',
          name: 'PageAbout',
          component: PageAbout,
        },
        {
          path: 'resume',
          name: 'PageResume',
          component: PageResume,
        },
        {
          path: 'portfolio',
          name: 'PagePortfolio',
          component: PagePortfolio,
        },
        {
          path: 'contacts',
          name: 'PageContacts',
          component: PageContacts,
        }
      ]
    },
    {
      path: '/snake',
      name: 'Snake',
      component: () => import(/* webpackChunkName: "snake" */ './views/Snake.vue')
    },
    {
      path: '*',
      redirect: '/resume'
    }
  ]
})
