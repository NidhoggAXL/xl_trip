<script setup>
import { getDetailData } from '@/server';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DetailSwipe from './cpns/detail_01-swipe.vue'
import DetailInfos from './cpns/detail_02-infos.vue';
import DetailFacilities from './cpns/detail_03-facilities.vue'

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
    <!-- 顶部 -->
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 防止数据还没有加载出来就进行显示 -->
    <div class="main" v-if="mainPart">
      <!-- 轮播图 -->
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>

      <!-- 房子简介 -->
      <detail-infos :top-module="mainPart.topModule"/>

      <!-- 房屋设置 -->
      <DetailFacilities :house-facility="mainPart.dynamicModule?.facilityModule?.houseFacility"/>
    </div>


  </div>
</template>

<style lang="less" scoped>

</style>