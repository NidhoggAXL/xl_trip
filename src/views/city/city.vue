<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
// import { getCityAll } from '@/server'

// 获取city-group组件
import cityGroup from './cnps/city-group.vue'


// 搜索框的绑定值,使用ref来创建响应式数据
// 取消按钮的路由跳转
const searchValue = ref('')
const router = useRouter()
const cancelClick = () => {
  router.back()
}


// 网络请求:请求城市数据
// const cityData = ref({})
// getCityAll().then(res => {
//   cityData.value = res.data
// })
// 通过Pinia来获取城市数据
import useCityStore from '@/store/modules/city'
import { storeToRefs } from 'pinia'
const cityStore = useCityStore()
// 第一次默认开启一次请求,防止页面加载时没有数据
cityStore.fetchCityData()
// 使用storeToRefs来获取响应式数据
const { cityData } = storeToRefs(cityStore)

const tabActive = ref(0)
// tabActive 默认绑定时缩影
// 通过给van-tab组件添加name属性改为绑定name对应的值
//获取元素标签后的数据
const currentGroup = computed(() => cityData.value[tabActive.value])

</script>

<template>
  <div class="city">
    <!-- city中不滚动的区域 -->
    <div class="top">
      <!-- 搜索框的搭建 -->
      <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置" 
        show-action
        shape="round"
        @cancel="cancelClick"
      />

      <!-- tabs的搭建 -->
      <!--  @click-tab="onClickTab(tabActive) -->
      <van-tabs v-model:active="tabActive" color="#ff9645">
        <template v-for="(value, key, index) in cityData" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <!-- 滚动的区域 -->
    <div class="content">
      <template v-for="(value, key, index) in cityData" :key="index">
        <city-group v-if="tabActive === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    // 局部页面的滚动
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>