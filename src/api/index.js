import Util from '@/libs/util'
// import config from '@/config'
// import { formatGetUri, formatFormData } from '@/utils'
// 获取jssdk
export const gainWx = data => Util.http.get('/jssdk/' + '?currentUrl=' + data.currentUrl, {})
// 获取token
export const getToken = data => Util.http.get('/core/getToken?code=' + data.code + '&mpid=' + data.mpid + '&appid=' + data.appid, {})

// 个人中心
export const queryBalance = data => Util.http.get('/core/queryBalance', {})
