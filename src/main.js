import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

export const eventBus = new Vue()

Vue.directive('success', {
  bind(el, binding) {
    el.style.color = binding.value
  }
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
