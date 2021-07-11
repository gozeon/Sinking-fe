import { createTags } from '@/utils'
import { map, filter } from 'lodash'

import axios from '../utils/axios'
import { ActionPayload, Commit } from 'vuex'
import qs from 'querystring'

export default {
  namespaced: true,
  state: {
    token: '',
  },
  mutations: {
    setToken(state: any, token: string) {
      state.token = token
    },
  },
  actions: {
    login({ commit }: { commit: Commit }, payload: ActionPayload) {
      return axios
        .post('token', qs.stringify({ ...payload }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then((res: any) => {
          const token = res.data.access_token
          commit('setToken', token)
          localStorage.setItem(import.meta.env.VITE_TOKEN_KEY + '', token)
        })
    },
  },
}
