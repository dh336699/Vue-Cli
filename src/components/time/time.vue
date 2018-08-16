<template>
  <article class="time-container">
    <section class="choose-date-title">
      <p class="title">选择出发时间
        <img src="/static/images/delete_icon@2x.png" class="delete" @click="closeCalendar">
      </p>
      <p class="date">{{dates}}</p>
    </section>
    <section class="time-range-wrapper">
      <div style="height: 6.666667rem /* 500/75 */;margin-top: 20px;">
        <ul>
          <li v-for="item in timeLists" :key="item.time"
          @click="chooseTime(item)" :class="{red: !item.status}">{{item.time}}</li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        timeLists: []
      }
    },
    props: {
      dates: {
        type: String,
        default: ''
      },
      currDayOrderInfoTime: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    mounted() {
      this._operateTimes()
    },
    methods: {
      chooseTime(item) {
        if (!item.status) {
          return false
        }
        this.$emit('chooseTime', item.time)
      },
      closeCalendar() {
        this.$emit('closeCalendar')
      },
      _operateTimes() {
        for (let key in this.currDayOrderInfoTime) {
          let keys = key.padStart(2, '0')
          // console.log(this.currDayOrderInfoTime[key], 'AAAAAAAA')
          this.timeLists.push({time: `${keys}:00`, status: this.currDayOrderInfoTime[key]})
        }
        console.log(this.timeLists)
      }
    },
    components: {}
  }

</script>

<style lang='less' scoped>
  .time-container {
    background: white;
    .choose-date-title {
      border-bottom: .026667rem /* 2/75 */ solid #E5E5E5;
      background: white;
      border-bottom: 0 none;
      .title {
        height: 1.173333rem /* 88/75 */;
        line-height: 1.04rem /* 78/75 */;
        font-size: .453333rem /* 34/75 */;
        color: #32383D;
        text-align: center;
        box-sizing: border-box;
        .delete {
          position: absolute;
          margin-top: .266667rem;
          margin-left: 2.533333rem /* 190/75 */;
          width: .4rem;
          height: .4rem;
          // border: .266667rem /* 20/75 */ solid transparent;
        }
      }
      .date {
        line-height: .64rem /* 48/75 */;
        font-size: .373333rem /* 28/75 */;
        font-family: PingFang-SC-Medium;
        color: rgba(50, 56, 61, 1);
        text-align: center;
      }
      .week {
        display: flex;
        justify-content: space-around;
        padding-left: .4rem /* 30/75 */;
        padding-right: .4rem /* 30/75 */;
        height: 1.013333rem /* 76/75 */;
        line-height: 1.013333rem /* 76/75 */;
        font-size: .453333rem /* 34/75 */;
        color: #222222;
        p {
          flex: 0 0 1.32rem /* 99/75 */;
          text-align: center;
        }
      }
    }
    .time-range-wrapper {
      ul {
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        padding: 0 .4rem /* 30/75 */;
        height: .8rem /* 60/75 */;
        background: white;
        li {
          display: inline-block;
          width: 25%;
          padding: .066667rem .133333rem;
          font-size: .373333rem /* 28/75 */;
          font-family: PingFang-SC-Medium;
          color: rgba(50, 56, 61, 1);
          text-align: center;
          &.red {
            color: red;
          }
        }
      }
    }
  }

</style>
