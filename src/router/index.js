import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import store from '@/store/index'

Vue.use(Router)

const RouterConfig = {
  mode: 'history',
  routes
}

const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  // if (to.matched.some(r => r.meta.requireAuth)) {
  //   let token = localStorage.token
  //   if (token) {
  //     next()
  //   } else {
  //     next({
  //       path: '/redirectIndex'
  //     })
  //   }
  //   next()
  // } else {
  //   next()
  // }
  next()
})
//
// router.afterEach(() => {
//
// })

export default router
