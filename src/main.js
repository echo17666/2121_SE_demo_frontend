import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import ElementUI from 'element-ui'
import material from 'material-icons/iconfont/material-icons.css';
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI)
new Vue({
  router,
  store,
  vuetify,
  material,
  render: h => h(App)
}).$mount('#app')
