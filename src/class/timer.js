export default class Timer {
  countDown(end, update, handle) { // end-结束的时间 update 倒计时执行的函数 handle 倒计时结束执行的函数
    let now = new Date().getTime()
    // console.log(now, 'now')
    const self = this
    if (end - now < 0) {
      handle.call(self)
    } else {
      let lastTime = end - now
      const pxD = 24 * 60 * 60 * 1000
      const pxH = 60 * 60 * 1000
      const pxM = 60 * 1000
      const pxS = 1000
      let d = Math.floor(lastTime / pxD)
      let h = Math.floor((lastTime - d * pxD) / pxH)
      let m = Math.floor((lastTime - d * pxD - h * pxH) / pxM)
      let s = Math.floor((lastTime - d * pxD - h * pxH - m * pxM) / pxS)
      m = this._padStart0(m)
      s = this._padStart0(s)
      // s = parseInt(s)
      let r = []
      if (d > 0) {
        r.push(`${d}天`)
      }
      if (h > 0 || r.length) {
        r.push(`${h}小时`)
      }
      if (m > 0 || r.length) {
        r.push(`${m}:`)
      }
      if (s > 0 || r.length) {
        r.push(`${s}秒`)
      }
      self.lastTime = r.join('')
      update.call(self, r.join(''))
      var interval = setTimeout(() => {
        self.countDown(end, update, handle)
      }, 1000)

      if (!self.lastTime) {
        update.call(self, '00:00')
        self.clears(interval)
        // clearInterval(interval)
      }
    }
  }
  _padStart0(s) {
    s = s.toString()
    s = s.padStart(2, '0')
    // s = parseInt(s)
    return s
  }
  clears(interval) {
    clearInterval(interval)
  }
}
