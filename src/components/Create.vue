<template>
  <div class="form-inline">
    <h3>Create account</h3>
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
      <button class="btn btn-primary" @click="create(username, password)">Create</button>
    </div>
    <br>
    <br>
    <router-link to="/login">Already have an account? Login here.</router-link>
  </div>
</template>

<script>
  export default {
    name: "Create",
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
      create(username, password) {
        if (!this.search(username) && username && password) {
          this.user = {
            username: this.username,
            password: this.password,
            balance: parseFloat(0),
            history: []
          }

          this.$store.commit('ADD_ACCOUNT', this.user)
          this.$store.commit('LOGIN', this.user)
          this.$router.push('/account')
        } else if (!username || !password) {
          this.error.message = "Username or password cannot be empty."
        } else {
          this.error.message = "That username is taken. Please try another one."
        }
      }
    }
  }
</script>

