<template>
  <input class="upload-image" type="file" name="pic" ref="file" accept="image/*" @change="upload"/>
</template>

<script>
import Exif from 'exif-js'
import { upload } from '@/api'

export default {
  props: {
  },
  data() {
    return {
      uploadName: ''
    }
  },
  mounted() {
    console.log(this.uploadType)
  },
  methods: {
    upload(e) {
      if (e.target.files.length > 0) {
        this.$vux.loading.show('Loading...')
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.picValue = files[0]
        this.uploadName = files[0].name

        // 上传图片
        let u = navigator.userAgent
        // app = navigator.appVersion
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // g
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
        if (isAndroid) {
          this.axiosFun(this.picValue)
        }
        if (isIOS) {
          this.imgPreview(this.picValue)
        }
        // 上传视频
        // this.axiosFun(this.picValue);
      }
    },
    imgPreview(file) {
      let self = this
      let Orientation
      // 去获取拍照时的信息，解决拍出来的照片旋转问题
      Exif.getData(file, function() {
        Orientation = Exif.getTag(this, 'Orientation')
      })
      // 看支持不支持FileReader
      if (!file || !window.FileReader) return

      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader()

        // 将图片2将转成 base64 格式
        reader.readAsDataURL(file)

        // 读取成功后的回调
        reader.onloadend = function() {
          let result = this.result
          let img = new Image()
          img.src = result
          // 判断图片是否大于100K,是就直接上传，反之压缩图片
          if (this.result.length <= 100 * 1024) {
            self.headerImage = this.result
            self.postImg()
          } else {
            img.onload = function() {
              let data = self.compress(img, Orientation)
              self.headerImage = data
              self.postImg()
            }
          }
        }
      }
    },
    compress(img, Orientation) {
      let _this = this
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      // 瓦片canvas
      let tCanvas = document.createElement('canvas')
      let tctx = tCanvas.getContext('2d')
      // let initSize = img.src.length
      let width = img.width
      let height = img.height
      // 如果图片大于四百万像素，计算压缩比并将大小压至400万以下
      let ratio
      if ((ratio = width * height / 4000000) > 1) {
        console.log('大于400万像素')
        ratio = Math.sqrt(ratio)
        width /= ratio
        height /= ratio
      } else {
        ratio = 1
      }
      canvas.width = width
      canvas.height = height
      //        铺底色
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      // 如果图片像素大于100万则使用瓦片绘制
      let count
      if ((count = width * height / 1000000) > 1) {
        console.log('超过100W像素')
        count = ~~(Math.sqrt(count) + 1) // 计算要分成多少块瓦片
        //            计算每块瓦片的宽和高
        let nw = ~~(width / count)
        let nh = ~~(height / count)
        tCanvas.width = nw
        tCanvas.height = nh
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            tctx.drawImage(
              img,
              i * nw * ratio,
              j * nh * ratio,
              nw * ratio,
              nh * ratio,
              0,
              0,
              nw,
              nh
            )
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh)
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height)
      }
      // 修复ios上传图片的时候 被旋转的问题
      if (Orientation !== '' && Orientation !== 1) {
        switch (Orientation) {
          case 6: // 需要顺时针（向左）90度旋转
            _this.rotateImg(img, 'left', canvas)
            break
          case 8: // 需要逆时针（向右）90度旋转
            _this.rotateImg(img, 'right', canvas)
            break
          case 3: // 需要180度旋转
            _this.rotateImg(img, 'right2', canvas)
            break
        }
      }
      // 进行最小压缩
      let ndata = canvas.toDataURL('image/jpeg', 0.1)
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0
      return ndata
    },
    rotateImg(img, direction, canvas) {
      // 最小与最大旋转方向，图片旋转4次后回到原方向
      const minStep = 0
      const maxStep = 3
      if (img === null) return
      // img的高度和宽度不能在img元素隐藏后获取，否则会出错
      let height = img.height
      let width = img.width
      let step = 2
      if (step === null) {
        step = minStep
      }
      if (direction === 'right') {
        step++
        // 旋转到原位置，即超过最大值
        step > maxStep && (step = minStep)
      } else if (direction === 'right2') {
        step = 2
      } else {
        step--
        step < minStep && (step = maxStep)
      }
      // 旋转角度以弧度值为参数
      let degree = step * 90 * Math.PI / 180
      let ctx = canvas.getContext('2d')
      switch (step) {
        case 0:
          canvas.width = width
          canvas.height = height
          ctx.drawImage(img, 0, 0)
          break
        case 1:
          canvas.width = height
          canvas.height = width
          ctx.rotate(degree)
          ctx.drawImage(img, 0, -height)
          break
        case 2:
          canvas.width = width
          canvas.height = height
          ctx.rotate(degree)
          ctx.drawImage(img, -width, -height)
          break
        case 3:
          canvas.width = height
          canvas.height = width
          ctx.rotate(degree)
          ctx.drawImage(img, -width, 0)
          break
      }
    },
    postImg() {
      // 这里写接口
      // console.log(this.headerImage)
      const block = this.headerImage.split(';')

      const contentType = block[0].split(':')[1] // In this case "image/jpeg"

      const realData = block[1].split(',')[1] // In this case "R0lGODlhPQBEAPeoAJosM...."

      let blob = this.b64toBlob(realData, contentType)
      this.axiosFun(blob)
    },
    uploadDefined(file, data, callback) {
      let _this = this
      let gObjectName = data.dir + this.randomString() + this.getSuffix(this.uploadName)
      let request = new FormData()
      request.append('OSSAccessKeyId', data.accessid) // Bucket 拥有者的Access Key Id。
      request.append('policy', data.policy) // policy规定了请求的表单域的合法性
      request.append('Signature', data.signature) // 根据Access Key Secret和policy计算的签名信息，OSS验证该签名信息从而验证该Post请求的合法性
      request.append('key', gObjectName) // 文件名字，可设置路径
      request.append('success_action_status', '200') // 让服务端返回200,不然，默认会返回204
      request.append('x-oss-object-acl', 'public-read')
      request.append('file', file)

      let xhr = new XMLHttpRequest()
      xhr.open('POST', data.host)
      xhr.send(request)
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // console.log("fileKey => " + data.host + "/" + gObjectName);
          // console.log(_this.imgPaths);
          _this.$vux.loading.hide()
          callback(data.host, gObjectName)
        } else if (xhr.status === 400) {
          _this.$vux.loading.hide()
          _this.$vux.toast.text('图片太大,请换取小的图片')
        }
      }
    },
    async imgUpload() {
      // const { data } = await uploadImg({url: host, })
    },
    async axiosFun(blob) {
      let that = this
      const { data } = await upload({})

      that.uploadDefined(blob, data, function(host, name) {
        that.$emit('uploadImage', {
          value: host + '/' + name
        })
      })
    },
    randomString(len) {
      len = len || 32
      let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
      let maxPos = chars.length
      let pwd = ''
      for (let i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos))
      }
      return pwd
    },
    getSuffix(filename) {
      let pos = filename.lastIndexOf('.')
      let suffix = ''
      if (pos !== -1) {
        suffix = filename.substring(pos)
      }
      return suffix
    },
    b64toBlob(b64Data, contentType = '', sliceSize = 512) {
      const byteCharacters = atob(b64Data)
      const byteArrays = []

      for (
        let offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
      ) {
        const slice = byteCharacters.slice(offset, offset + sliceSize)

        const byteNumbers = new Array(slice.length)
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i)
        }

        const byteArray = new Uint8Array(byteNumbers)

        byteArrays.push(byteArray)
      }

      const blob = new Blob(byteArrays, { type: contentType })
      return blob
    }
  }
}
</script>

<style lang="less" scoped>
  .upload-image {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
</style>
