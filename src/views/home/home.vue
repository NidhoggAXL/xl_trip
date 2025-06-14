<script setup>
import { useHomeStore } from '@/store/modules/home';
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue'

// // 发送分类的网络请求
const homeStore = useHomeStore()
homeStore.fetchCategories()
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

    <!-- 分类 -->
    <home-categories />
  </div>


</template>

<style lang="less" scoped>
  .home-img {
    img {
      width: 100%;
    }
  }

</style>