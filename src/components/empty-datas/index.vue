<template>
  <article class="empty-wrapper">
    <p class="none-datas">
      <slot></slot>
    </p>
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

<style lang='less'>
@import '../../common/styles/elements.less';
.empty-wrapper {
  .none-datas {
    position: absolute;
    top: 40%;
    left:50%;
    transform: translateX(-50%);
    font-size:.48rem /* 36/75 */;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(65,59,54,1);
  }
}
</style>
