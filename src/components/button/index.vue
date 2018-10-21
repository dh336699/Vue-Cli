<template>
  <article>
    <a class="btn" @click="conrifm">
      <slot></slot>
    </a>
  </article>
</template>

<script>
// import * as api from '@/common/urls'
// import * as xx from '@/common/wx'
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
    }
  },
// computed: {
//  ...mapGetters({
//  token: 'getToken'
//  }),
//  ...mapState({})
// },
  methods: {
    conrifm() {
      this.$emit('confrim')
    }
  },
  components: {

  }
}
</script>

<style lang='less' scoped>
@import '../../common/styles/elements.less';
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 1.17rem /* 88/75 */;
  background: #FFFFFF;
  font-size:.43rem /* 32/75 */;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(65,59,54,1);
  text-align: center;
}
</style>
