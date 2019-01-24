<template>
  <article class="six-header-wrapper">
    <ul>
      <li v-for="(item, index) in lists" :key="index" :class="item.status ? 'active' : ''" @click="chooseType(lists, item, index)">{{item.typeName}}</li>
    </ul>
  </article>
</template>

<script>
  export default {
    props: {
      lists: {
        type: Array
        // default: [
        //   {id: 1, typeName: '主食', status: true},
        //   {id: 2, typeName: '点心'},
        //   {id: 3, typeName: '粥品'},
        //   {id: 4, typeName: '饮料'},
        //   {id: 5, typeName: '果蔬'},
        //   {id: 6, typeName: '套餐'}
        // ]
      }
    },
    methods: {
      chooseType(lists, item, index) {
        this.$emit('chooseType', item)
        lists.forEach((list) => {
          list.status = false
        })
        lists[index].status = true
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../common/styles/elements.less';
  .six-header-wrapper {
    .border-bottom(#EAEAEA);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: .4rem /* 30/75 */;
    padding-right: .43rem /* 32/75 */;
    background: #FFFFFF;
    z-index: 3;
    ul {
      .logo('/static/images/order-header', 100%, 1.44rem /* 108/75 */);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.17rem /* 88/75 */;
      li {
        height: 100%;
        line-height: 1.17rem /* 88/75 */;
        margin-left:.13rem /* 10/75 */;
        margin-right: .13rem /* 10/75 */;
        font-size:.32rem /* 24/75 */;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(65,59,54,1);
        &.active {
          height: 100%;
          border-bottom: .05rem /* 4/75 */ solid #413B36;
          box-sizing: border-box;
        }
      }

    }
  }
</style>
