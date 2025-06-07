<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
</script>

<template>
  <div class="home">
    <home-nav-bar />

    <div class="home-img">
      <img src="@/assets/imgs/home/banner.webp" alt="Home Image" />
    </div>
  </div>


</template>

<style lang="less" scoped>
  .home-img {
    img {
      width: 100%;
    }
  }

</style>