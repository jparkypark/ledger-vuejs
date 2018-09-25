<template>
<div>
  <h2>Hello, {{username}}</h2>
  <div v-if="error.message">
    {{error.message}}
  </div>
  <div class="container">
    <div class="card" @click="redirect('/deposit')">
      Deposit
    </div>
    <br>
    <div class="card" @click="redirect('/withdraw')">
      Withdraw
    </div>
    <br>
    <div class="card" @click="redirect('/balance')">
      Balance
    </div>
    <br>
    <div class="card" @click="redirect('/history')">
      History
    </div>
    <br>
  </div>
  <button class="btn btn-danger btn-sm signout-btn" @click="logout">Logout</button>

</div>
</template>

<script>
    import Deposit from "./Deposit"
    import Withdraw from "./Withdraw"
    import Balance from "./Balance"
    import History from "./History"

    export default {
      name: "Account",
      components: {Deposit, Withdraw, Balance, History},
      data() {
        return {
          username: this.$store.state.user.username,
          balance: this.$store.state.user.balance,
          history: this.$store.state.user.history,
          error: {
            message: ''
          }
        }
      },
      methods: {
        redirect(route) {
          this.$router.push(route)
        },
        logout(){
          this.$store.dispatch('logout')
          this.$router.push('/login')
        }
      },
      created() {
        if (!this.$store.state.user.username){
          this.$router.push('/login')
        }
      }
    }
</script>

<style scoped>

</style>
