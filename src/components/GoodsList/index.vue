<template lang="html">
  <div class="goodslist">
    <ul>
      <li v-for="(item, index) of dataList" :key="index">
        <router-link :to="{ name: 'goodsDetail', params: { id: item.id } }">
          <span class="goodImg">
            <img v-lazy="item.logo" alt="">
          </span>
          <div class="goodInfo">
            <p class="goodName">{{ item.goods_name }}</p>
            <p class="price"><span>¥</span>{{ item.retailPrice.toFixed(2) }} <i>¥{{ item.marketPrices.toFixed(2) }}</i></p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.goodslist {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-bottom: .13rem;
      a {
        display: block;
        width: 4.93rem;
        .goodImg {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4.93rem;
          height: 4.93rem;
          padding: .4rem;
          margin-bottom: 2px;
          background-color: #FFFFFF;
          img {
            display: block;
            max-width: 100%;
            max-height: 100%;
          }
        }
        .goodInfo {
          background-color: #FFFFFF;
          padding: .2rem .32rem;
          .goodName {
            font-size: .37rem;
            color: #003333;
            line-height: .48rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .price {
            font-size: .45rem;
            color: #CD181E;
            span {
              font-size: .32rem;
            }
            i {
              color: #909399;
              font-size: .29rem;
              font-style: normal;
              text-decoration: line-through;
            }
          }
        }
      }
      &:nth-child(even) {
        margin-left: .13rem;
      }
    }
  }
}
</style>
