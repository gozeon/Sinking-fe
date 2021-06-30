import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: true,
    },
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  // 需要权限
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // 是否有权限
    if (localStorage.getItem('jwt') == null) {
      next({
        name: 'Login',
        query: { nextUrl: to.fullPath },
      })
    } else {
      // 可根据用户角色去跳转对应路由
      next()
    }
  } else {
    // 判断 guest
    next()
  }
})

export default router
