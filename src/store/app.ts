import { createProject, createAuths, createPages } from '@/utils'
import { Commit, ActionPayload } from 'vuex'

export default {
  namespaced: true,
  state: {
    apps: createProject(),
    pages: createPages(200),
    auths: createAuths(10),
  },
  mutations: {
    addAuth(state: any, newAuth: any) {
      state.auths = [...state.auths, newAuth]
    },
  },
  actions: {
    async addAuth({ commit }: { commit: Commit }, payload: ActionPayload) {
      commit('addAuth', {
        ...payload,
        id: +Date.now(),
      })
    },
  },
}
