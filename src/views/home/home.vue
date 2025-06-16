<script setup>
import { computed, ref, watch } from 'vue';
import { useHomeStore } from '@/store/modules/home';
import useScroll from '@/hook/useScroll';
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue';
import homeSearchBar from './cpns/home-search-bar.vue';


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
const { isReachBottom, scrollTop } = useScroll() 
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseList().then(() => { 
      isReachBottom.value = false
    })
  }
})

// 所有框的显示和隐藏
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 450
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

    <!-- 搜索框 -->
    <div class="search-bar" v-if="isShowSearchBar">
      <home-search-bar />
    </div>


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

  // 搜索框设置
  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
</style>