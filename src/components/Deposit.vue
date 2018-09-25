<template>
  <div class="container">
    <h2>Deposit</h2>
    <div v-if="error.message">
      {{error.message}}
    </div>
    <div class="form-group">
      <input
        v-money="money"
        placeholder="amount"
        class="form-control"
        v-model="amount"
      />
      <br>
      <br>
      <button class="btn btn-primary" @click="deposit(amount)">Deposit</button>
      <br>
      <br>
      <button class="btn btn-primary" @click="goBack">Go back to account page</button>
    </div>
  </div>
</template>

<script>
  import {VMoney} from 'v-money'

  export default {
    name: "Deposit",
    data() {
      return {
        user: {
          username: this.$store.state.user.username,
          password: this.$store.state.user.password,
          balance: this.$store.state.user.balance,
          history: this.$store.state.user.history,
        },
        error: {
          message: ''
        },
        amount: 0,
        money: {
          prefix: '$ ',
          precision: 2
        }
      }
    },
    methods:{
      deposit(amount) {
        amount = amount.substring(2)
        var amountFloat = parseFloat(amount)
        console.log(amountFloat)
        if (amountFloat < 0.01){
          this.error.message = 'Not a valid amount'
          return
        }
        this.user.balance = this.user.balance + amountFloat
        var transaction = {type: 'Deposit', amount: amountFloat.toFixed(2), date: new Date(Date.now()).toLocaleString()}
        this.user.history.unshift(transaction)
        console.log(this.$store.state.accounts.findIndex(x => x.username === this.user.username))
        this.$store.commit('UPDATE_ACCOUNT', this.user)
        alert('Deposited $ ' + amount + ' into your account.')
        this.$router.push('/account')
      },
      goBack(){
        this.$router.push('/account')
      }
    },
    directives: {
      money: VMoney
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
