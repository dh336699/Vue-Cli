import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { setTitle } from '@/utils'
import store from '@/store'

Vue.use(Router)

const RouterConfig = {
  mode: 'history',
  routes
}

const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      // next({
      //   path: '/',
      //   query: {redirect: to.fullPath}
      // })
      next()
    }
  } else {
    next()
  }
})
//
router.afterEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    setTitle(to.meta.title)
  }
})

export default router
