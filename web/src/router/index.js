import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import(/* webpackChunkName: "about" */ '../views/My.vue'),
    children: [
      {
        path: '/my',
        name: 'NewHealth',
        component: () => import(/* webpackChunkName: "newHealth" */ '../views/info/NewHealth.vue')
      },
      {
        path: '/my/new_danger',
        name: 'NewDanger',
        component: () => import(/* webpackChunkName: "newDanger" */ '../views/info/NewDanger.vue')
      },
      {
        path: '/my/old_health',
        name: 'OldHealth',
        component: () => import(/* webpackChunkName: "oldHealth" */ '../views/info/OldHealth.vue')
      },
      {
        path: '/my/old_danger',
        name: 'OldDanger',
        component: () => import(/* webpackChunkName: "oldDanger" */ '../views/info/OldDanger.vue')
      },
      {
        path: '/my/location',
        name: 'Location',
        component: () => import(/* webpackChunkName: "location" */ '../views/info/Location.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
