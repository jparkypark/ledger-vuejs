<template>
  <div class="container">
    <h2>Balance for {{username}}</h2>
    <div class="card">
      $ {{balance}}
      <br>
    </div>
    <br>
    <button class="btn btn-primary" @click="goBack">Go back to account page</button>
  </div>
</template>

<script>
  export default {
    name: "Withdraw",
    data() {
      return {
        username: this.$store.state.user.username,
        balance: parseFloat(this.$store.state.user.balance).toFixed(2)
      }
    },
    methods:{
        goBack(){
          this.$router.push('/account')
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
