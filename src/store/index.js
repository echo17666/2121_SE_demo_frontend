import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: window.localStorage.getItem('token') ? true : false,
    userId: window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token').split('$$$QAQ')[1]) : 0,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  login() {
    this.state.isLogin = true;
    let str = window.localStorage.getItem('token').split('$$$QAQ');
    this.state.userId = str[1];
},
})
