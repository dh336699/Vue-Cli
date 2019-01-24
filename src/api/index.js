import Util from '@/libs/util'
// import config from '@/config'
// import { formatGetUri, formatFormData } from '@/utils'
// 获取jssdk
export const gainWx = data => Util.http.get('/jssdk/' + '?currentUrl=' + data.currentUrl, {})
// 获取token
export const getToken = data => Util.http.get('/core/getToken?code=' + data.code + '&mpid=' + data.mpid + '&appid=' + data.appid, {})
// 获取阿里oss上传token
export const upload = data => Util.http.get(`/wechat/common/oss-token`, data)
// 个人中心
export const queryBalance = data => Util.http.get('/core/queryBalance', {})
