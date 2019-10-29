import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Delivery from '../views/Delivery.vue'
import Menu from '../views/Menu.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: Delivery
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
