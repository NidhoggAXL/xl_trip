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
getCityAll().then(res => {
  console.log(res)
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

    <!-- tabs的页面搭建 -->
    <van-tabs active="{{ active }}" color="#ff9645">
      <van-tab title="国内·港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>

</style>