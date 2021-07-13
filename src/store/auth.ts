import { createTags } from '@/utils'
import { map, filter } from 'lodash'

import axios from '../utils/axios'
import { ActionPayload, Commit } from 'vuex'
import qs from 'querystring'

export default {
  namespaced: true,
  state: {
    token: '',
    username: '',
  },
  mutations: {
    setToken(state: any, token: string) {
      state.token = token
    },
    setUsername(state: any, username: string) {
      state.username = username
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
    me({ commit }: { commit: Commit }, payload: ActionPayload) {
      return axios.get('/users/me').then((res: any) => {
        commit('setUsername', res.data?.username)
      })
    },
  },
}
