<template lang="html">
  <div class="payPwd">
    <div class="form">
      <div class="formItem" @click="isShow = true">
        <div class="item" v-for="(opt, i) of 6" :key="i">
          <span v-if="keys.length > i">●</span>
        </div>
      </div>
    </div>
    <!-- <transition name="fade">
      <div class="masker" v-if="modal"></div>
    </transition> -->

    <transition name="move">
      <div class="modal" v-if="isShow">
        <div class="keyboard">
          <div class="keyboardBtn" v-for="(item, index) of 9" :key="index">
            <button @click="inputNum(index + 1)" type="button" name="button">{{ index + 1 }}</button>
          </div>
          <div class="keyboardBtn">
            <!-- <button type="button" name="button">1</button> -->
          </div>
          <div class="keyboardBtn">
            <button @click="inputNum(0)" type="button" name="button">0</button>
          </div>
          <div class="keyboardBtn">
            <button @click="deleteNum" type="button" name="button">del</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    onFinished: Function
  },
  data () {
    return {
      isShow: false,
      keys: ''
    }
  },
  methods: {
    inputNum (key) {
      let str = this.keys
      if (str.length < 6) {
        str = str + key
        this.keys = str
      }
      if (str.length === 6) {
        this.isShow = false
        this.onFinished(str)
      }
    },
    deleteNum () {
      let str = this.keys
      if (str.length > 0 || str !== '') {
        str = str.substr(0, str.length - 1)
      }
      this.keys = str
    }
  }
}
</script>

<style lang="less" scoped>
.payPwd {
  position: relative;
  .form {
    padding: .27rem 10vw;
    .formItem {
      display: flex;
      height: 100vw / 8;
      border: .5px solid #e6e6e6;
      background-color: #e6e6e6;
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        margin: 0 .5px;
        background: #ffffff;
      }
    }
  }
  .masker {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: fade(#000000, 70%);
  }
  .modal {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    background: #FFFFFF;
    .keyboard {
      display: flex;
      flex-wrap: wrap;
      background: #e6e6e6;
      .keyboardBtn {
        padding: .5px;
        width: 100vw / 3;
        height: 100vw / 7;
        background: #e6e6e6;
        button {
          width: 100%;
          height: 100%;
          border: none;
          background: #FFFFFF;
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  .move-enter-active {
    animation: move-in .5s;
  }
  .move-leave-active {
    animation: move-out .5s;
  }
  @keyframes move-in {
    0% {
      bottom: -400vw / 7;
    }
    100% {
      bottom: 0;
    }
  }
  @keyframes move-out {
    0% {
      bottom: 0;
    }
    100% {
      bottom: -400vw / 7;
    }
  }
}
</style>
