<template>
  <article class="title-container">
    <p class="date"><slot name="title"></slot></p>
    <slot name="content"></slot>
    <img src="/static/images/shadow.png" alt="" class="shadow">
  </article>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang='less' scoped>
@import '../../common/styles/elements.less';
.title-container {
  margin-bottom: .4rem /* 30/75 */;
  padding: .37rem /* 28/75 */ .4rem /* 30/75 */ .4rem /* 30/75 */;
  background: white;
  position: relative;
  .date {
    margin-bottom: .39rem /* 29/75 */;
    padding-bottom: .35rem /* 26/75 */;
    line-height: .45rem /* 34/75 */;
    font-size:.37rem /* 28/75 */;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(65,59,54,1);
    border-bottom: .01rem /* 1/75 */solid #EAEAEA;
    span {
      color: #B80000;
    }
  }
}
</style>
