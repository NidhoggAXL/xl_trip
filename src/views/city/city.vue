<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchValue = ref('')
const router = useRouter()
const cancelClick = () => {
  router.back()
}
</script>

<template>
  <div class="city">
    <van-search 
      v-model="searchValue" 
      placeholder="城市/区域/位置" 
      show-action
      shape="round"
      @cancel="cancelClick"
    />
    <van-tabs active="{{ active }}" color="#ff9645">
      <van-tab title="国内·港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>

</style>