import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import money from 'v-money'

Vue.use(VueRouter)

import store from './store'

import Create from './components/Create'
import Login from './components/Login'
import Account from './components/Account'
import Deposit from './components/Deposit'
import Withdraw from './components/Withdraw'
import Balance from './components/Balance'
import History from './components/History'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/create', component: Create },
    { path: '/login', component: Login },
    { path: '/account', component: Account },
    { path: '/deposit', component: Deposit },
    { path: '/withdraw', component: Withdraw },
    { path: '/balance', component: Balance},
    { path: '/history', component: History}
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
