<script setup>
import { useHomeStore } from '@/store/modules/home';
import homeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';

// // 发送热门城市的网络请求
// const homeStore = useHomeStore()
// homeStore.fetchHotSuggests()
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