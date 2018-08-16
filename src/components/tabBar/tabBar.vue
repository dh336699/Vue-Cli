<template>
  <article class="tabBar-container">
    <div class="common-wrapper" @click="index">
      <img src="/static/images/home_icon@2x.png" v-if="!home" alt="">
      <img src="/static/images/xz_home_icon@2x.png" v-else alt="">
      <p :class="!home ? '' : 'active'">首页</p>
    </div>
    <div class="common-wrapper" @click="mines">
      <img src="/static/images/gray_me_icon@2x.png" v-if="!mine" alt="">
      <img src="/static/images/me_icon@2x.png" v-else alt="">
      <p :class="!mine ? '' : 'active'">我的</p>
    </div>
  </article>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      home: {
        type: Number,
        default: 0
      },
      mine: {
        type: Number,
        default: 0
      }
    },
    methods: {
      index() {
        this.$router.push('/userIndex')
      },
      mines() {
        this.$router.push('/userCenter')
      }
    },
    components: {}
  }

</script>

<style lang='less' scoped>
  .tabBar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.133333rem;
    height: 1.306667rem;
    background: white;
    .common-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        margin-bottom: .026667rem;
        width: .72rem;
        height: .72rem;
      }
      p {
        font-size: .266667rem;
        font-family: PingFangSC-Regular;
        color: #C2C8CF;
        &.active {
          color: #28A0F4;
        }
      }
    }
  }

</style>
