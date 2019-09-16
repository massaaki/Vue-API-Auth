<template>
  <div id="app">
    <div>Auth with Api</div>
    <div>{{$store.state.foo}}</div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  created() {
    this.$store.dispatch("getFoo");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
