import Vue from 'vue'
import Vuex from 'vuex'

import dictkey from './dictkey'
import project from './project'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    dictkey,
    project,
  },
})
