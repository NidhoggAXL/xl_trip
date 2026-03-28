<script setup>
import { ref, watch } from 'vue';
import tabbarData from '@/assets/data/tabbarData.js';
import { getAssets } from '@/utils/load_assets.js';
import { useRoute } from 'vue-router';

// 监听路由改变时，对应的currentIndex
const currentIndex = ref(0);
const route = useRoute()  
watch(route, (newRouter) => {
  const index = tabbarData.findIndex(item => item.path === newRouter.path)
  if (index === -1 ) return
  currentIndex.value = index
})
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ee0a24" route>
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span class="text">{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssets(item.image)" alt="">
            <img v-else :src="getAssets(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
  .tab-bar {
    .text {
      font-size: 12px;
    }
    img {
      height: 24px;
    }
  }
</style>