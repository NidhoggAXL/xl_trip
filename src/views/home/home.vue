<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';


</script>

<template>
  <div class="home">
    <!-- titile -->
    <home-nav-bar />

    <!-- home主要图片 -->
    <div class="home-img">
      <img src="@/assets/imgs/home/banner.webp" alt="Home Image" />
    </div>

    <!-- 城市搜索 -->
    <home-search-box />
  </div>


</template>

<style lang="less" scoped>
  .home-img {
    img {
      width: 100%;
    }
  }

</style>