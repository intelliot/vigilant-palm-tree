import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './scss/style.scss'

import i18n from './i18n'

import AppLayout from './layout/App.vue'

Vue.config.productionTip = false

Vue.component('app-layout', AppLayout)

new Vue({
  i18n,
  name: 'Root',
  router,
  render: h => h(App)
}).$mount('#app')
