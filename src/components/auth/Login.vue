<template>
  <div class="page-wrapper login-form">
    <h2 class="login-heading">Login</h2>
    <form action="#" @submit.prevent="login">
      <div class="form-control">
        <input
          type="text"
          id="username"
          class="login-input"
          placeholder="usuario"
          v-model="username"
        />
      </div>
      <div class="form-control mb-more">
        <input
          type="password"
          id="password"
          class="login-input"
          placeholder="senha"
          v-model="password"
        />
      </div>
      <div class="form-control">
        <button type="submit" class="btn-submit">Logar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          //   this.$router.push({ name: "todo" });
        });
    }
  }
};
</script>

<style>
</style>