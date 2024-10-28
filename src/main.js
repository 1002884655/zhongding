import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*引入路由控制 */
// import './permission'

/** 处理传参 */
import qs from 'qs'
Vue.prototype.$qs = qs

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import './assets/css/reset.scss'

import instance from './api/instance'
Vue.prototype.$ajax = instance

Vue.config.productionTip = false
Vue.prototype.$store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
