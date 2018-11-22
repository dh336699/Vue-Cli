export const toast = (context, tip) => {
  context.$vux.toast.text(`${tip}`)
}
export const toast2 = (context, text, type, callback) => {
  context.$vux.toast.show({
    text,
    type,
    onHide: callback
  })
}
export const alert = (context, title, content, onHide) => {
  context.$vux.alert.show({
    title,
    content,
    onShow () {
      console.log('Plugin: I\'m showing')
    },
    onHide
  })
}
export const load = (context, text = '加载中...') => {
  context.$vux.loading.show({
    text
  })
}
export const hide = (context) => {
  context.$vux.loading.hide()
}
