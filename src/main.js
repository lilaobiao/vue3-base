import Vue from 'vue'
import Router from 'vue-router'
// 引入Composition API模块
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import routes from '@/router/index.js'
import 'weui'


Vue.config.productionTip = false
// 显式调用 VueCompositionApi
Vue.use(VueCompositionApi)
Vue.use(Router)

const router = new Router({
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
