<script setup>
import { getDetailData } from '@/server';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DetailSwipe from './cpns/detail-swipe.vue'

const router = useRouter()
const route = useRoute()

// 网络请求获取数据
const detailData = ref({})
const mainPart = computed(() => detailData.value.mainPart)
getDetailData(route.params.id).then(res => {
  detailData.value = res.data
})
// 顶部返回
const onClickLeft = () => {
  router.back()
}
</script>

<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 防止数据还没有加载出来就进行显示 -->
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
    </div>

  </div>
</template>

<style lang="less" scoped>

</style>