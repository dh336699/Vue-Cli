const getToken = r => require.ensure([], () => r(require('@/pages/getToken/getToken')), 'getToken')

export default [
  {
    path: '/',
    redirect: '/getToken'
  }, {
    path: '/getToken',
    name: 'getToken',
    meta: {
      title: '授权',
      requireAuth: true
    },
    component: getToken
  }
]
