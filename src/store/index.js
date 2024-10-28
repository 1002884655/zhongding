import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    menuList: [],
    authorities: [],
    perminsStrlist: [],
  },
  mutations: {
    updateState(state, data) {
      const { key, value } = data
      if(!key || !value) return
      state[key] = value
    },
  },
  actions: {
  },
  modules: {
  }
})
