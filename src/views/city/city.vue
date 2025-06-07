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
  </div>
</template>

<style lang="less" scoped>

</style>