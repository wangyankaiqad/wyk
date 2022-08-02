import Vue from 'vue'
import Router from 'vue-router'
import dengl from './components/dengl.vue'
import login from './components/login.vue'
import huiyuna from './components/huiyuna.vue'
import shouye from './components/shouye.vue'
import gys from './components/gys.vue'
import spgl from './components/spgl.vue'
import yggl from './components/yggl.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: dengl
    },
    {
      path: '/login',
      component: login,
      children:[
        {
          path: '/huiyuna',
          component: huiyuna
        },
        {
          path: '/shouye',
          component:shouye 
        },
        {
          path: '/gys',
          component:gys 
        },
        {
          path: '/spgl',
          component:spgl 
        },
        {
          path: '/yggl',
          component:yggl 
        }
      ]
    }

  ]
})
