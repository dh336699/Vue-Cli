<template>
  <article class="index-container">
    Hello World
  </article>
</template>

<script>
  import Timer from '@/class/timer'
  export default {
    data() {
      return {
        startTime: '',
        times: '',
        endTime: '' // 剩余支付时间
      }
    },
    mounted() {
      this._countDown()
    },
    methods: {
      update(e) {
        this.endTime = e
      },
      handle(e) {
        // this._orderNumber()
      },
      _countDown() {
        let timer = new Timer()
        timer.clears()
        let end = this.startTime + this.times
        console.log(end)
        timer.countDown(end, this.update, this.handle)
      }
    },
    components: {
    }
  }
</script>

<style lang='less' scoped>
.index-container {
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 40px;
}
</style>
