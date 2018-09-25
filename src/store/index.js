import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  accounts: [],
  user: {}
}

const vuexPersist = new VuexPersist({
  key: 'ledger',
  storage: localStorage
})

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [vuexPersist.plugin],
  getters:{
    search(state) {
      return keyword => state.accounts.find(account =>{
        return account.username === keyword
      });
    }
  }
})
