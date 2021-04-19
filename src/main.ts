import Vue from 'vue'
import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'

import App from './App.vue'
import router from './router'

import './scss/style.scss'

import i18n from './i18n'

import AppLayout from './layout/App.vue'

Vue.config.productionTip = false

Vue.component('app-layout', AppLayout)

Vue.use(Vuelidate)
Vue.use(VModal)

new Vue({
  i18n,
  name: 'Root',
  router,
  render: h => h(App)
}).$mount('#app')
