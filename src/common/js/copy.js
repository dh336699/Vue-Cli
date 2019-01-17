// 输入手机号流程
// _checkMobile(type) {
//       let telReg = /^1[2-9][0-9]{9}$/
//       if (!this.datas.mobile) {
//         xx.toast(this, '请输入手机号码')
//         return false
//       } else if (!telReg.test(this.datas.mobile)) {
//         xx.toast(this, '请输入正确的手机号码')
//         return false
//       } else if (type && !this.datas.code) {
//         xx.toast(this, '请输入验证码')
//         return false
//       } else return true
//     },
//     async getVerify() {
//       let bool = this._checkMobile(false)
//       if (!bool) return
//       try {
//         let { data } = await api.getSms({mobile: this.datas.mobile})
//         if (!data.code) xx.alert(this, '已发送验证码', () => { this.getCode() })
//         else xx.alert(this, data.msg)
//       } catch (e) {
//         throw Error(e)
//       }
//     },
//     getCode() {
//       let telReg = /^1[2-9][0-9]{9}$/
//       if (!this.datas.mobile) {
//         xx.toast(this, '请输入手机号码')
//         return
//       } else if (!telReg.test(this.datas.mobile)) {
//         xx.toast(this, '请输入正确的手机号码')
//         return
//       }
//       this.timer = setTimeout(() => {
//         this.getCode()
//       }, 1000)
//       if (this.timeNum === 0) {
//         this.timeNum = 60
//         this.showTime = false
//         clearTimeout(this.timer)
//       } else {
//         this.timeNum -= 1
//         this.showTime = true
//       }
//     }
// 多规格选择
// chooseSku(it, index, idx) {
    //   if (it.stock === 0) return
    //   if (this.selectArr[index] === it.goodsSkuSpecValName) {
    //     // this.selectArr.splice(index, 1)
    //     this.$set(this.selectArr, index, '')
    //     this.formData.skuId = ''
    //   } else this.$set(this.selectArr, index, it.goodsSkuSpecValName)
    //   if (this.selectArr.length === this.goodsInfo.skuSpec.length) { // 选取了所有的规格时 拿去skuId
    //     let str = ''
    //     this.selectArr.forEach(item => {
    //       str += '_' + item
    //     })
    //     str = str.slice(1)
    //     this.goodsInfo.skuList.forEach(item => { // 匹配skuId
    //       if (item.skuName === str) this.formData.skuId = item.id
    //     })
    //   }
    //   this.getData(this.selectArr, this.goodsInfo.skuSpec, this.goodsInfo.skuList) // 校验库存
    // },
    // getData(selectArr, skuSpec, skuList) {
    //   console.log(skuSpec)
    //   let checkLen = skuSpec.length - 1 // 3行规格 选2行时校验，2行规格，选1行时校验
    //   if (selectArr < checkLen) return
    //   skuSpec.forEach((item, index) => {
    //     item.goodsSpecVals.forEach((it, idx) => {
    //       let c = this._deepCopy(selectArr)
    //       c[index] = it.goodsSkuSpecValName
    //       let skuName = this.getCid(c, skuSpec, skuList)
    //       console.log(skuName, 'skuNameskuNameskuName')
    //       let stock = this.getStock(skuName, skuSpec, skuList)
    //       it.stock = stock
    //       // this.$set(it, 'stock', stock)
    //     })
    //   })
    //   console.log(skuSpec)
    // },
    // getCid(c, skuSpec, skuList) {
    //   if (c.length !== skuSpec.length) return
    //   let cStr = c.join('_')
    //   for (let i in skuList) {
    //     if (skuList[i].skuName === cStr) {
    //       return skuList[i].skuName
    //     }
    //   }
    // },
    // getStock(skuName, skuSpec, skuList) {
    //   console.log(skuName, 'skuName')
    //   if (!skuName) return
    //   for (let a in skuSpec) {
    //     for (let b in skuSpec[a].goodsSpecVals) {
    //       if (skuSpec[a].goodsSpecVals[b].children.indexOf(skuName) !== -1) {
    //         for (let i in skuList) {
    //           if (skuList[i].skuName === skuName) {
    //             console.log(skuList[i], 'skusku')
    //             return skuList[i].stock
    //           }
    //         }
    //       }
    //     }
    //   }
    //   console.log(skuSpec, 'skuSpecskuSpec')
    // },