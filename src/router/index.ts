import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
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
  {
    path: '/app/:id',
    component: () => import(/* webpackChunkName: "app" */ '../views/App.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'App',
        redirect: {
          name: 'App.Menu',
        },
      },
      {
        path: 'menu',
        name: 'App.Menu',
        component: () =>
          import(/* webpackChunkName: "app.menu" */ '../views/Menu.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'auth',
        name: 'App.Auth',
        component: () =>
          import(/* webpackChunkName: "app.auth" */ '../views/Auth.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'analysis',
        name: 'App.Analysis',
        component: () =>
          import(
            /* webpackChunkName: "app.analysis" */ '../views/Analysis.vue'
          ),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'setting',
        name: 'App.Setting',
        component: () =>
          import(/* webpackChunkName: "app.setting" */ '../views/Setting.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'page',
        name: 'App.Page',
        component: () =>
          import(/* webpackChunkName: "app.page" */ '../views/Page.vue'),
        meta: {
          requiresAuth: true,
        },
      },
    ],
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
