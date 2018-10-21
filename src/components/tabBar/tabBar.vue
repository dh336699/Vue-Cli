<template>
  <article class="tabBar-container">
    <section class="tabbar-wrapper">
      <router-link to="/getoken" class="common-item" :class="{active: index === 0}">
        <img :src="index !== 0 ? '/static/images/watch@2x.png' : '/static/images/watch2.png'" class="logo">
        <p>预约</p>
      </router-link>
      <router-link to="/getoken" class="common-item" :class="{active: index === 1}">
        <img :src="index !== 1 ? '/static/images/15@2x.png' : '/static/images/watch2.png'" class="logo2">
        <p>商城</p>
      </router-link>
      <router-link to="/getoken" class="common-item" :class="{active: index === 2}">
        <img :src="index !== 2 ? '/static/images/shop1.png' : '/static/images/shop3.png'" class="logo3">
        <p>购物袋</p>
      </router-link>
      <router-link to="/getoken" class="common-item" :class="{active: index === 3}">
        <img :src="index !== 3 ? '/static/images/mine.png' : '/static/images/mine3.png'" class="logo4">
        <p>预约</p>
      </router-link>
    </section>
  </article>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    methods: {
    },
    components: {}
  }

</script>

<style lang='less' scoped>
  .tabBar-container {
    .tabbar-wrapper {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height:1.31rem /* 98/75 */;
      background:rgba(255,255,255,1);
      border-top: .01rem /* 1/75 */ solid #E8EAEB;
      .list(row, space-between, center);
      .common-item {
        flex: 1;
        .list(column, center, center);
        width: 100%;
        height: 100%;
        &.active {
          background: #413B36;
          p {
            color: white;
          }
        }
        .logo {
          margin-bottom: .03rem /* 2/75 */;
        .imgs(.59rem /* 44/75 */, .61rem /* 46/75 */);
        }
        .logo2 {
          margin-bottom: .03rem /* 2/75 */;
          .imgs(.61rem /* 46/75 */, .64rem /* 48/75 */);
        }
        .logo3 {
          margin-bottom: .03rem /* 2/75 */;
          .imgs(.56rem /* 42/75 */, .56rem /* 42/75 */);
        }
        .logo4 {
          margin-bottom: .03rem /* 2/75 */;
          .imgs(.51rem /* 38/75 */, .64rem /* 48/75 */);
        }
        p {
          font-size:.27rem /* 20/75 */;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:#413B36;
        }
      }
    }
  }

</style>
