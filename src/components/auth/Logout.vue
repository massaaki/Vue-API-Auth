<template></template>

<script>
export default {
  created() {
    // this.$store.dispatch("clearTodos");
    this.$store.dispatch("destroyToken").then(response => {
      this.$router.push({ name: "login" });
    });
  }
};
</script>

<style>
</style>