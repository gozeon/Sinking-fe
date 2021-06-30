import { createTags } from '@/utils'
import { map, filter } from 'lodash'

export default {
  namespaced: true,
  state: {
    tags: createTags(),
  },
  mutations: {
    toggleSelectTag(state: any, id: string) {
      state.tags = map(state.tags, (item: any) => {
        if (item.id === id) {
          item.select = !item.select
        }
        return item
      })
    },
  },
  getters: {
    selectTags(state: any) {
      return filter(state.tags, { select: true })
    },
  },
  actions: {},
}
