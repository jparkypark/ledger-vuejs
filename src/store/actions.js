import * as types from './mutation-types'

export const addAccount = ({commit, user_payload}) => {
  commit(types.ADD_ACCOUNT, user_payload)
}

export const login = ({commit}, user_payload) => {
  commit(types.LOGIN, user_payload)
}

export const logout = ({commit}) => {
  commit(types.LOGOUT)
}

export const updateAccount = ({commit, user_payload}) => {
  commit(types.UPDATE_ACCOUNT, user_payload)
}
