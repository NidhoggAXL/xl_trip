<script setup>
import { useHomeStore } from '@/store/modules/home';
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue';
import useScroll from '@/hook/useScroll';
import { watch } from 'vue';

// 网络请求
const homeStore = useHomeStore()
// 发送分类的网络请求
homeStore.fetchCategories()
// house列表
homeStore.fetchHouseList()
// 按钮测试house列表的刷新
// const homeListClick = () => {
//   homeStore.fetchHouseList()
// }
// 监听滚动来进行houselist的更更新
const { isReachBottom } = useScroll() 
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseList().then(() => { 
      isReachBottom.value = false
    })
  }
})


</script>

<template>
  <div class="home" >
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

    <!-- houser列表数据 -->
    <home-content />
    <!-- <button @click="homeListClick">请求更多的数据</button> -->
  </div>


</template>

<style lang="less" scoped>
  .home {
    margin-bottom: 50px;
  }
  .home-img {
    img {
      width: 100%;
    }
  }

</style>