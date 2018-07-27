import Bind from './bindModal.vue'

let $vm
// let watcher

const plugin = {
  install (vue, pluginOptions = {}) {
    const Modal = vue.extend(Bind)

    if (!$vm) {
      $vm = new Modal({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const bindModal = {
      show () {
        $vm.show = true
      },
      hide () {
        $vm.show = false
      }
    }

    // all Vux's plugins are included in this.$vux
    if (!vue.$vux) {
      vue.$bindModal = {
        bindModal
      }
    } else {
      vue.$bindModal = bindModal
    }

    vue.mixin({
      created: function () {
        this.$bindModal = vue.$bindModal
      }
    })
  }
}

export default plugin
export const install = plugin.install
