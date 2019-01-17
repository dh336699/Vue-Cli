<template>
  <article class="swiper-container">
    <Swiper :list="options.list" :show-dots="options.showDots" :height="options.height" :loop="options.loop"
    :auto="options.auto" :show-desc-mask="false" dots-position="center"
    :interval="options.interval" v-model="options.current" @on-index-change="swiperChange"></Swiper>
    <ul class="dots" v-if="!options.showDots">
      <li v-for="(item, idx) in options.list" :key="idx">
        <div class="dot" :class="{active: idx === options.current}"></div>
      </li>
    </ul>
  </article>
</template>

<script>
  import { Swiper } from 'vux'
  export default {
    data() {
      return {
      }
    },
    props: {
      options: {
        type: Object,
        default: () => ({
          list: [
            {
              url: 'javascript:',
              img: 'https://static.vux.li/demo/1.jpg',
              title: '送你一朵fua'
            }, {
              url: 'javascript:',
              img: 'https://static.vux.li/demo/5.jpg',
              title: '送你一次旅行',
              fallbackImg: 'https://static.vux.li/demo/3.jpg'
            }
          ],
          height: '180px',
          width: '100%',
          showDots: true,
          interval: 3000,
          loop: true,
          auto: true,
          current: 0
        })
      }
    },
    methods: {
      swiperChange(e) {
        // this.current = e.mp.detail.current
      }
    },
    components: {
      Swiper
    }
  }

</script>

<style lang='less' scoped>
  @import '../../common/styles/elements.less';

  .swiper-container {
    height: 100%;
    .dots {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      // margin-left: 4.35rem /* 326/75 */;
      margin-top: -.27rem /* 20/75 */;
      z-index:3;
      .list(row, center, center);

      .dot {
        width: .21rem /* 16/75 */;
        height: .08rem /* 6/75 */;
        background: rgba(203, 202, 198, 1);
        border-radius: .08rem /* 6/75 */;
        margin-right: .08rem /* 6/75 */;

        /*选中以后的小圆点样式 */
        &.active {
          width: .4rem /* 30/75 */;
          background: rgba(64, 59, 55, 1);
        }
      }
    }
  }

</style>
