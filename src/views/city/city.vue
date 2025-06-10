<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCityAll } from '@/server'

// 搜索框的绑定值,使用ref来创建响应式数据
// 取消按钮的路由跳转
const searchValue = ref('')
const router = useRouter()
const cancelClick = () => {
  router.back()
}

// 网络请求:请求城市数据
const cityData = ref({})
getCityAll().then(res => {
  cityData.value = res.data
})
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