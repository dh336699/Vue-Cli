<template>
  <article class="modal-container">
    <section class="mask"></section>
    <section class="modal">
      <slot name="title" class="title"></slot>
      <slot name="content" class="content"></slot>
      <slot name="btn" class="btn">
      </slot>
    </section>
  </article>
</template>

<script>
// import * as api from '@/common/urls'
// import * as xx from '@/common/wx'
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import { transform13Time } from '@/utils/index'
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
//  ...mapMutations({setToken: 'setToken'}),
//  ...mapActions({asyncToken: 'asyncToken'})
  },
  components: {

  }
}
</script>

<style lang='less' scoped>
@import '../../common/styles/elements.less';
.modal-container {
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,.3);
    z-index:1;
  }
  .modal {
    position: fixed;
    top: 2.53rem /* 190/75 */;
    left: 1.28rem /* 96/75 */;
    right: 1.25rem /* 94/75 */;
    z-index: 2;
    padding-top: .53rem /* 40/75 */;
    background: white;
  }
}
</style>
