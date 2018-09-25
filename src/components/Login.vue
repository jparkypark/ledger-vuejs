<template>
  <div class="form-inline">
    <h3>Login</h3>
    <div v-if="error.message">
      {{error.message}}
    </div>
    <div class="form-group">
      <input
        type="text"
        placeholder="Username"
        class="form-control"
        v-model="username"
      />
      <br>
      <br>
      <input
        type="password"
        placeholder="password"
        class="form-control"
        v-model="password"
      >
      <br>
      <br>
      <button class="btn btn-primary" @click="login">Login</button>
    </div>
    <br>
    <br>
    <router-link to="/create">New user? Create an account here.</router-link>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods:{
      search (username) {
        return this.$store.getters.search(username)
      },
      login() {
        var login = this.search(this.username)
        if (login && login.password === this.password) {
          this.$store.commit('LOGIN', login)
          this.$router.push('/account')
        } else {
          this.error.message = "Incorrect username or password. Please try again or create a new account."
        }
      }
    }
  }
</script>

