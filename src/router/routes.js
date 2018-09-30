const getToken = r => require.ensure([], () => r(require('@/pages/getToken/getToken')), 'getToken')
const index = r => require.ensure([], () => r(require('@/pages/index/index')), 'index')

export default [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/getToken',
    name: 'getToken',
    meta: {
      title: '授权',
      requireAuth: true
    },
    component: getToken
  }, {
    path: '/index',
    name: 'index',
    meta: {
      title: '首页',
      requireAuth: true
    },
    component: index
  }
]
