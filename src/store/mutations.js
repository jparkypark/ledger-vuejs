import * as types from './mutation-types'

export const mutations = {
  [types.ACCOUNTS] (state, payload) {
    state.accounts.push(...payload)
  },
  [types.ADD_ACCOUNT] (state, user_payload) {
    state.accounts.push(user_payload)
  },
  [types.LOGIN] (state, user_payload) {
    state.user = user_payload
  },
  [types.LOGOUT] (state) {
    state.user = {}
  },
  [types.UPDATE_ACCOUNT] (state, user_payload) {
    state.accounts.splice(state.accounts.findIndex(x => x.username === user_payload.username), 1)
    state.accounts.push(user_payload)
    state.user = user_payload
  }
}
