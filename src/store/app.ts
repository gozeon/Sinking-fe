import { createProject, createAuths } from '@/utils'
import { Commit, ActionPayload } from 'vuex'

export default {
  namespaced: true,
  state: {
    apps: createProject(),
    auths: createAuths(10),
  },
  mutations: {
    addAuth(state: any, newAuth: any) {
      state.auths = [...state.auths, newAuth]
    },
  },
  actions: {
    async addAuth({ commit }: { commit: Commit }, payload: ActionPayload) {
      console.log('🚀 ~ file: app.ts ~ line 13 ~ addAuth ~ payload', payload)
      commit('addAuth', {
        ...payload,
        id: +Date.now(),
      })
    },
  },
}
