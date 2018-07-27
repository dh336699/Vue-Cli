import Env from './env'

const ajaxUrl = Env === 'development'
  ? 'https://daihao.frp.dev.wmeimob.com/api'
  : Env === 'production'
    ? 'http://cwx.kaqi.wmeimob.com'
    : 'http://wx.xianni.wmeimob.com'

const appid = Env === 'development'
  ? 'wxf319f6330c5e881c'
  : Env === 'production'
    ? 'wx017048f8b68ee7f7'
    : 'wx017048f8b68ee7f7'

const mpid = Env === 'development'
  ? '10005'
  : Env === 'production'
    ? '7'
    : '7'
const loginUrl = 'http://daihao.frp.dev.wmeimob.com'
let config = {
  api: ajaxUrl,
  appid,
  mpid,
  loginUrl
}
export default config
