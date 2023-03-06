import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import material from 'material-icons/iconfont/material-icons.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  material,
  render: h => h(App)
}).$mount('#app')
