<template>
  <div id="app">
    <ul>
      <li v-if="!loggetIn">
        <router-link :to="{name: 'login'}">Login</router-link>
      </li>
      <li v-if="!loggetIn">
        <router-link :to="{name: 'register'}">register</router-link>
      </li>
      <li v-if="loggetIn">
        <router-link :to="{name: 'logout'}">logout</router-link>
      </li>
    </ul>

    <div>Auth with Api</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    loggetIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>

<style>
</style>