import Vue from 'vue'
import Router from 'vue-router'
import explain from '@/components/explain'
import comInfo from '@/components/comInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'explain',
      component: explain
    },
    {
      path: '/comInfo',
      name: 'comInfo',
      component: comInfo
    }
  ]
})
