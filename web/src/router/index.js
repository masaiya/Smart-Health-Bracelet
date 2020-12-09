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
    redirect: '/new_health',
    children: [
      {
        path: '/new_health',
        name: 'NewHealth',
        component: () => import(/* webpackChunkName: "newHealth" */ '../views/info/NewHealth.vue')
      },
      {
        path: '/new_danger',
        name: 'NewDanger',
        component: () => import(/* webpackChunkName: "newDanger" */ '../views/info/NewDanger.vue')
      },
      {
        path: '/old_health',
        name: 'OldHealth',
        component: () => import(/* webpackChunkName: "oldHealth" */ '../views/info/OldHealth.vue')
      },
      {
        path: '/old_danger',
        name: 'OldDanger',
        component: () => import(/* webpackChunkName: "oldDanger" */ '../views/info/OldDanger.vue')
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
