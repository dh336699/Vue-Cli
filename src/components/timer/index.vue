<template>
  <article class="register-container">
    <header class="header-wrapper">
      <img src="/static/images/register-logo@2x@2x.png" class="logo" />
    </header>
    <section class="input-wrapper">
      <div class="common-item">
        <i class="regiser-icon1"></i>
        <p>姓名</p>
        <input type="text" placeholder="请输入您的姓名">
      </div>
      <div class="common-item">
        <i class="regiser-icon2"></i>
        <p>手机号</p>
        <input type="number" placeholder="请输入手机号">
      </div>
      <div class="common-item">
        <i class="regiser-icon3"></i>
        <p>验证码</p>
        <input type="number" placeholder="请输入验证码">
        <a class="code-btn" v-if="timeNum === 60" @click="getCode">获取验证码</a>
        <a class="code-btn" v-else>{{timeNum}}'</a>
      </div>
    </section>
    <a class="btn-bottom">注册</a>
  </article>
</template>

<script>
// import * as api from '@/api'
// import * as xx from '@/common/js/wx'
// import { transform13Time } from '@/common/js'
export default {
  data() {
    return {
      timeNum: 60,
      timer: null
    }
  },
  beforeDestroy() {
    if (this.timer) { // 如果定时器还在运行 或者直接关闭，不用判断
      clearTimeout(this.timer) // 关闭
    }
  },
  methods: {
    getCode() {
      this.timer = setTimeout(() => {
        this.getCode()
      }, 1000)
      if (this.timeNum === 0) {
        this.timeNum = 60
        this.showTime = false
        clearTimeout(this.timer)
      } else {
        this.timeNum -= 1
        this.showTime = true
      }
    }
  },
  components: {

  }
}
</script>

<style lang='less' scoped>
@import '../../common/styles/elements.less';
.register-container {
  padding-top: 1.23rem /* 92/75 */;
  min-height: 100%;
  background: @white;
  box-sizing: border-box;
  .header-wrapper {
    .list(row, center, center);
    margin-bottom: 1.09rem /* 82/75 */;
    .logo {
      .imgs(2.91rem /* 218/75 */, 2.91rem /* 218/75 */);
    }
  }
  .input-wrapper {
    padding-left: .53rem /* 40/75 */;
    box-sizing: border-box;
    .common-item {
      .list(row, flex-start, center);
      padding-right: .53rem /* 40/75 */;
      max-width: 100%;
      height: 1.33rem /* 100/75 */;
      border-bottom: .05rem /* 4/75 */ solid @gray;
      .regiser-icon1 {
        .logo('/static/images/regiser-icon1', .53rem /* 40/75 */, .64rem /* 48/75 */);
        flex: 0 0 .53rem /* 40/75 */;
        margin-right: .29rem /* 22/75 */;
      }
      .regiser-icon2 {
        .logo('/static/images/regiser-icon2', .51rem /* 38/75 */, .64rem /* 48/75 */);
        flex: 0 0 .51rem /* 38/75 */;
        margin-right: .32rem /* 24/75 */;
      }
      .regiser-icon3 {
        .logo('/static/images/regiser-icon3', .51rem /* 38/75 */, .64rem /* 48/75 */);
        flex: 0 0 .51rem /* 38/75 */;
        margin-right: .32rem /* 24/75 */;
      }
      p {
        flex: 0 0 1.84rem /* 138/75 */;
        font-size:.43rem /* 32/75 */;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(102,102,102,1);
      }
      input {
        max-width: 3.6rem /* 270/75 */;
        font-size:.43rem /* 32/75 */;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(102,102,102,1);
        &::-webkit-input-placeholder {
          font-size:.43rem /* 32/75 */;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(153,153,153,1);
        }
      }
      .code-btn {
        .imgs(2.64rem /* 198/75 */, .8rem /* 60/75 */);
        flex: 0 0 2.64rem /* 198/75 */;
        line-height: .8rem /* 60/75 */;
        font-size:.37rem /* 28/75 */;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
        background: @blue;
        border-radius: .16rem /* 12/75 */;
      }
    }
  }
}
</style>
