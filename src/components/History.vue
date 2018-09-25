<template>
  <div class="container">
    <h2>History of Transactions</h2>
    <div v-for="(transaction, index) in this.history" :key="index">
      <div class="card">
        Type: {{transaction.type}}
        <br>
        Amount: $ {{transaction.amount}}
        <br>
        Date: {{transaction.date}}
        <br>
      </div>
      <br>
    </div>
    <br>
    <button class="btn btn-primary" @click="goBack">Go back to account page</button>
  </div>
</template>

<script>
    export default {
        name: "History",
      data() {
        return {
          history: this.$store.state.user.history,
        }
      },
      methods: {
        goBack(){
          this.$router.push('/account')
        }
      }
    }
</script>

<style scoped>

</style>
