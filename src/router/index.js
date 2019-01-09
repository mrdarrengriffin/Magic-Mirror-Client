import Vue from 'vue'
import Router from 'vue-router'

import Admin from '@/components/Admin.vue'
import Home from '@/components/Home.vue'
import HomeB from '@/components/HomeB.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/layout-a',
      name: 'Home',
      component: Home
    },
    {
      path: '/layout-b',
      name: 'HomeB',
      component: HomeB
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
