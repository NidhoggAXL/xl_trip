<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import { getCityAll } from '@/server'

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


</script>

<template>
  <div class="city">
    <!-- 搜索框的搭建 -->
    <van-search 
      v-model="searchValue" 
      placeholder="城市/区域/位置" 
      show-action
      shape="round"
      @cancel="cancelClick"
    />

    <!-- tabs的搭建 -->
    <van-tabs active="{{ active }}" color="#ff9645">
      <template v-for="(value, key, index) in cityData" :key="key">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>

</style>