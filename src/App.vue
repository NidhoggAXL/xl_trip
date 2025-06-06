<script setup>

</script>

<template>
  <div class="app">
    <router-view />

    <div class="router">
      <router-link to="/Home">Home</router-link>
      <router-link to="/Message">Message</router-link>
      <router-link to="/Order">Order</router-link>
      <router-link to="/Favor">Favor</router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .app {
    .router {
      display: flex;
      justify-content: space-between;
    }
  }
</style>