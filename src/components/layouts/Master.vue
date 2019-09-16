<template>
  <div id="app">
    <ul>
      <!-- <li> <router-link :to="{}"></router-link> </li> -->
    </ul>

    <div>Auth with Api {{$store.state.token}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>