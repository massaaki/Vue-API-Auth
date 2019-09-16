import Vue from 'vue'
import App from './App.vue'
import {
  auth
} from './store/auth'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: auth
}).$mount('#app')