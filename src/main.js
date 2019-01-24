// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Moment from 'moment'
import FastClick from 'fastclick'
import Reg from './common/js/reg'
import { LoadingPlugin, ToastPlugin, AlertPlugin, ConfirmPlugin } from 'vux'
import VueLazyload from 'vue-lazyload'
import '@/styles/index.css'

Vue.use(VueLazyload, {
  loading: require('../static/images/login_logo@2x.png')
})
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin, {isShowMask: true, width: '10em'})
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

//  点击延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}

Vue.filter('moment', function(value, formatString) {
  formatString = formatString || 'YYYY-MM-DD'
  return Moment(value).format(formatString)
})
Vue.filter('moment1', function(value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
  return Moment(value).format(formatString)
})
Vue.config.productionTip = false
Vue.prototype.Reg = Reg
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
