import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import BMap from 'vue-baidu-map'
import './assets/css/common.less'
Vue.config.productionTip = false

Vue.prototype.$axios = axios;
Vue.use(ElementUI);

Vue.use(BMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'odprABcF7gEgbtTBmiqmMRLzY8MPca2n'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
