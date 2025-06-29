<script setup>
import { getDetailData } from '@/server';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useScroll from '@/hook/useScroll';

import TabControl from '@/components/tab-control/tab-control.vue';
import DetailSwipe from './cpns/detail_01-swipe.vue'
import DetailInfos from './cpns/detail_02-infos.vue';
import DetailFacilities from './cpns/detail_03-facilities.vue'
import DetailLandlord from './cpns/detail_04-landlord.vue'
import DetailComment from './cpns/detail_05-comment.vue';
import DetailNotice from './cpns/detail_06-notice.vue';
import DetailMap from './cpns/detail_07-map.vue'
import DetailIntro from './cpns/detail_08-intro.vue'


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

// 导航条显示控制
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})

// const landlordRef = ref()
const tabClick = (index) => {
  console.log(detailRef.value)
  detailRef.value.scrollTo({
    top: index * 800, // 每个模块的高度假设为800px
    behavior: "smooth"
  })
}

</script>

<template>
  <div class="detail"  ref="detailRef">

    <!-- 导航控制 -->
    <tab-control 
      v-if="showTabControl" 
      class="tabs"
      :titles="['房屋设施', '房东信息', '热门评论', '预定须知', '地图']"
      @itemClick="tabClick"
    />

    <!-- 导航条 -->
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

      <!-- 房东介绍 -->
      <detail-landlord :landlord="mainPart.dynamicModule.landlordModule" />

      <!-- 热门评论 -->
      <detail-comment :comment="mainPart.dynamicModule.commentModule"/>

      <!-- 预定须知 -->
      <detail-notice :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />

      <!-- 地图 -->
      <detail-map :position="mainPart.dynamicModule.positionModule"/>

      <!-- 价格介绍 -->
      <detail-intro :price-intro="mainPart.introductionModule" />
    </div>

    <!-- 尾部 -->
    <div class="footer">
      <img src="@/assets/imgs/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>


  </div>
</template>

<style lang="less" scoped>
.detail{
  height: 100vh;
  background-color: #fff;
  overflow-y: auto;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}

.tabs {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>