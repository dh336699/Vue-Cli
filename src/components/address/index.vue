<template>
  <article class="editAddress-container">
    <div class="picker-wrapper">
      <popup-picker :title="title4" :data="address" :columns="3" v-model="value4"
      show-name value-text-align="left"
      @on-change="pickerChange"></popup-picker>
      <i class="right-icon" v-if="!value4.length"></i>
    </div>
  </article>
</template>

<script>
import { PopupPicker } from 'vux'
import cityJson from '@/data/city.json'
// import * as api from '@/common/urls'
// import * as xx from '@/common/wx'
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import lastPage from '@/components/lastPage'
// import Vue from 'vue'
// import { transform13Time } from '@/utils/index'
export default {
  data() {
    return {
      addressList: {},
      value4: [],
      address: []
    }
  },
  computed: {
    title4() {
      let title4 = !this.value4.length ? '请选择地址' : ''
      return title4
    }
  },
  mounted() {
    this._initCity()
  },
  methods: {
//  ...mapMutations({setToken: 'setToken'}),
//  ...mapActions({asyncToken: 'asyncToken'})
    pickerChange() {
      console.log(this.value4)
    },
    _initCity() {
      cityJson.forEach(item => {
        this.address.push({
          name: item.name,
          value: item.id.toString(),
          parent: item.pid.toString()
        })
        item.children.forEach(its => {
          this.address.push({
            name: its.name,
            value: its.id.toString(),
            parent: its.pid.toString()
          })
          its.children.forEach(i => {
            this.address.push({
              name: i.name,
              value: i.id.toString(),
              parent: i.pid.toString()
            })
          })
        })
      })
    }
  },
  components: {
    PopupPicker
  }
}
</script>

<style lang='less' scoped>
@import '../../../common/styles/elements.less';
.editAddress-container {
  padding: .35rem /* 26/75 */ .4rem /* 30/75 */;
  min-height: 100%;
  box-sizing: border-box;
  background: #EAEAEA;
  p, .bottom, .picker-wrapper {
    padding-left: .4rem /* 30/75 */;
    line-height: 1.16rem /* 87/75 */;
    font-size:.32rem /* 24/75 */;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(65,59,54,1);
    .border-bottom(#EAEAEA);
    background: white;
    .icon1 {
      margin-right: .27rem /* 20/75 */;
      .logo('/static/images/none', .37rem /* 28/75 */, .37rem /* 28/75 */);
    }
    .icon2 {
      margin-right: .27rem /* 20/75 */;
      .logo('/static/images/selected', .37rem /* 28/75 */, .37rem /* 28/75 */);
    }
    input::-webkit-input-placeholder {
      font-size:.32rem /* 24/75 */;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(65,59,54,1);
    }
  }
  .picker-wrapper {
    .list(row, space-between, center);
    flex-wrap: nowrap;
    padding-right: .4rem /* 30/75 */;
    .right-icon {
      .logo('/static/images/right-icon', .16rem /* 12/75 */, .32rem /* 24/75 */);
    }
  }
  .bottom {
    .list(row, flex-start, center);
  }
}
</style>
