// 时间戳处理函数 转换的格式为：2018-1-2 => 2018-01-02 || 2018-01-02 10:00:00
export function transform13Time(timestamp, type) {
  // var date = new Date(timestamp * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var date = new Date(timestamp)
  var Y = date.getFullYear() + '-'
  var M = padStart(date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = padStart(date.getDate())
  var h = ' ' + padStart(date.getHours()) + ':'
  var m = padStart(date.getMinutes()) + ':'
  var s = padStart(date.getSeconds())
  // console.log(typeof m)
  if (m <= 10) {
    m = '0' + m
  }
  // var s = date.getSeconds()
  if (!type) { // 不传返回年月日
    return Y + M + D
  } else {
    return Y + M + D + h + m + s
  }
}
// 时间处理函数 例如：2018-1-2 => 2018-01-02
export function padStart(str) {
  str = str.toString()
  str = str.padStart(2, '0')
  return str
}
// 倒计时60s函数
export const time60s = (timeNum, showTime) => {
  console.log(timeNum)
  console.log(showTime)
  let interval = setTimeout(() => {
    time60s(timeNum, showTime)
  }, 1000)
  if (timeNum === 0) {
    timeNum = 60
    showTime = false
    clearTimeout(interval)
    return timeNum
  } else {
    timeNum -= 1
    showTime = true
    return timeNum
  }
}
// _checkMobile(type) {
//       let telReg = /^1[2-9][0-9]{9}$/
//       if (!this.datas.mobile) {
//         xx.toast(this, '请输入手机号码')
//         return false
//       } else if (!telReg.test(this.datas.mobile)) {
//         xx.toast(this, '请输入正确的手机号码')
//         return false
//       } else if (type && !this.datas.code) {
//         xx.toast(this, '请输入验证码')
//         return false
//       } else return true
//     },
//     async getVerify() {
//       let bool = this._checkMobile(false)
//       if (!bool) return
//       try {
//         let { data } = await api.getSms({mobile: this.datas.mobile})
//         if (!data.code) xx.alert(this, '已发送验证码', () => { this.getCode() })
//         else xx.alert(this, data.msg)
//       } catch (e) {
//         throw Error(e)
//       }
//     },
//     getCode() {
//       let telReg = /^1[2-9][0-9]{9}$/
//       if (!this.datas.mobile) {
//         xx.toast(this, '请输入手机号码')
//         return
//       } else if (!telReg.test(this.datas.mobile)) {
//         xx.toast(this, '请输入正确的手机号码')
//         return
//       }
//       this.timer = setTimeout(() => {
//         this.getCode()
//       }, 1000)
//       if (this.timeNum === 0) {
//         this.timeNum = 60
//         this.showTime = false
//         clearTimeout(this.timer)
//       } else {
//         this.timeNum -= 1
//         this.showTime = true
//       }
//     }

export const _jssdk = () => {
  let url = window.location.href
  let index = url.indexOf('?')
  let currUrl = window.location.href.slice(0, index)
  currUrl = encodeURIComponent(currUrl)
  let { data } = await api.jssdk({currentUrl: currUrl, appid: config.appid})
  wx.config({
      // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: data.appId, // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.nonStr, // 必填，生成签名的随机串
      signature: data.signature, // 必填，签名
      jsApiList: ['chooseImage', 'uploadImage'] // 必填，需要使用的JS接口列表
  })
}
