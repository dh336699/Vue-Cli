<template lang="html">
  <div class="bind">
    <div class="masker" v-if="show"></div>
    <div class="bindPhone" v-if="show">
      <h4>绑定手机号</h4>
      <div class="form">
        <div class="formItem">
          <input v-model="phoneno" type="text" name="" placeholder="输入账号">
        </div>
        <div class="formItem">
          <input v-model="code" type="text" name="" placeholder="输入验证码" style="width: 60%;">
          <button type="button" name="button" @click="checkValidData" :disabled="start">
            {{ start?'':'获取验证码'}}
            <countdown v-if="start" v-model="countNum" :start="start" @on-finish="finished"></countdown>
            {{ start?'s':''}}
          </button>
        </div>
        <div class="formBtn">
          <button type="button" name="button" class="cancel" @click="show = false">取消</button>
          <button type="button" name="button" class="confirm" @click="checkEmpty">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Countdown } from 'vux'
import { sendMsm, register } from '@/api'
import store from '@/store'

export default {
  name: 'bind',
  data () {
    return {
      countNum: 60,
      start: false,
      show: false,
      phoneno: '',
      code: ''
    }
  },
  methods: {
    async setUserInfo () {
      try {
        this.$vux.loading.show({text: 'Loading...'})
        const res = await store.dispatch('getUserInfo')

        this.$vux.loading.hide()
        console.log(res)
        this.show = false
      } catch (e) {
        console.log(e)
      }
    },
    async bindPhone () {
      try {
        this.$vux.loading.show({text: 'Loading...'})
        const { data } = await register({ phoneno: this.phoneno, code: this.code })

        this.$vux.loading.hide()
        if (data.code === 0) {
          this.setUserInfo()
        } else {
          this.$vux.toast.show({
            type: 'warn',
            text: data.msg
          })
        }
      } catch (e) {

      }
    },
    checkEmpty () {
      const testPhone = /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/

      if (this.phoneno === '') {
        this.$vux.toast.text('手机号不能为空！')
        return
      }

      if (!testPhone.test(this.phoneno)) {
        this.$vux.toast.text('请输入正确的手机号！')
        return
      }

      if (this.code === '') {
        this.$vux.toast.text('请输入验证码！')
        return
      }
      this.bindPhone()
    },
    checkValidData () {
      const testPhone = /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/

      if (!testPhone.test(this.phoneno)) {
        this.$vux.toast.text('请输入正确的手机号')
        return
      }
      this.start = true
      this.getValidCode()
    },
    async getValidCode () {
      try {
        this.$vux.loading.show({text: 'Loading...'})
        const { data } = await sendMsm({ phoneno: this.phoneno })

        this.$vux.loading.hide()
        if (data.code === 0) {
          this.$vux.toast.show({
            type: 'success',
            text: '发送成功'
          })
        } else {
          this.$vux.toast.show({
            type: 'warn',
            text: data.msg
          })
        }
      } catch (e) {

      }
    },
    finished (index) {
      this.start = false
      this.countNum = 60
    }
  },
  components: {
    Countdown
  }
}
</script>

<style lang="less" scoped>
.bind {
  .masker {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: fade(#000000, 70%);
    z-index: 999;
  }
  .bindPhone {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: .4rem;
    width: 80vw;
    // height: 6.99rem;
    background: #FFFFFF;
    transform: translate(-50%, -50%);
    z-index: 1000;
    h4 {
      text-align: center;
      color: #333333;
      font-size: .43rem;
    }
    .form {
      padding-top: .27rem;
      .formItem {
        display: flex;
        justify-content: space-between;
        margin-top: .27rem;
        input {
          flex: 1;
          height: 1.15rem;
          padding: 0 .4rem;
          border: none;
          border-radius: .16rem;
          background: #EBEEF5;
        }
        button {
          flex: 1;
          padding: 0 .27rem;
          // width: 2.53rem;
          margin-left: .27rem;
          height: 1.15rem;
          color: #FFFFFF;
          // white-space: nowrap;
          font-size: .37rem;
          border: none;
          border-radius: .16rem;
          background: #CBAD79;
        }
      }
      .formBtn {
        display: flex;
        justify-content: space-between;
        padding-top: .8rem;
        button {
          flex: 1;
          height: 1.15rem;
          font-size: .45rem;
          border: none;
          border-radius: .16rem;
          &.cancel {
            margin-right: .13rem;
            color: #606266;
            background: #EBEEF5;
          }
          &.confirm {
            margin-left: .13rem;
            color: #FFFFFF;
            background: #CD181E;
          }
        }
      }
    }
  }
}
</style>
