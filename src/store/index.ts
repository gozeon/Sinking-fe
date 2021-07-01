import Vue from 'vue'
import Vuex from 'vuex'

import dictkey from './dictkey'
import app from './app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    dictkey,
    app,
  },
})
