<script setup>
import { getDetailData } from '@/server';
import { computed, ref, watch } from 'vue';
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

// 用于存储各个模块的DOM元素
const sectionEls = ref({})

// 计算各个模块的名称
const names = computed(() => {
  return Object.keys(sectionEls.value)
})

// 获取各个模块的DOM元素
const getSectionRefs = (value) => {
  //当进行路由跳转，组件销毁的时候会再次调用这个函数
  //这个时候，如果传入的值为null，要进行处理
  if (!value) return
  // 如果传入的值不是一个组件实例，则直接返回
  const name = value.$el.getAttribute('name')
  sectionEls.value[name] = value.$el
}

// 滚动和点击tabContrl时，滚动和点击的冲突的bug
let isClick = false
let currentDistance = 0

// 点击tab时，滚动到对应的模块
const tabClick = (index) => {
  //获取对应的模块元素
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  let distance = el.offsetTop - 45

  // 记录当前滚动的距离
  currentDistance = distance
  // 如果当前正在滚动，则不执行
  isClick = true

  detailRef.value.scrollTo({
    top: distance, 
    behavior: "smooth"
  })
}

//页面滚动，滚动时匹配对应的tabcontroll的index
const tabControlRef = ref()
watch(scrollTop, (newVal) => {
  if (currentDistance === newVal) {
    // 如果当前滚动的距离和之前记录的距离相同，则不执行
    isClick = false
  }
  if (isClick) return

  // 1.获取所有的section元素的所有元素的offsetTop
  const els = Object.values(sectionEls.value)
  const value = els.map(el => el.offsetTop)
  // console.log(value)

  //2.根据newVal的值，找到对应的index
  let index = value.length - 1
  for (let i = 0; i < value.length; i++) {
    if (value[i] > newVal + 40) {
      index = i - 1
      break
    }
  }
  tabControlRef.value?.setCurrentIndex(index)
})


</script>

<template>
  <div class="detail"  ref="detailRef">

    <!-- 导航控制 -->
    <tab-control 
      v-if="showTabControl" 
      class="tabs"
      :titles="names"
      @itemClick="tabClick"
      ref="tabControlRef"
      />

    <!-- 导航条 -->
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />



    <div class="main" v-if="mainPart">
      <!-- 轮播图 -->
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>

      <!-- 房子简介 -->
      <detail-infos :top-module="mainPart.topModule"/>

      <!-- 房屋设施 -->
      <detail-facilities name="设施" :ref="getSectionRefs" :house-facility="mainPart.dynamicModule?.facilityModule?.houseFacility"/>

      <!-- 房东介绍 -->
      <detail-landlord name="房东" :ref="getSectionRefs" ref="landlordRef" :landlord="mainPart?.dynamicModule?.landlordModule" />

      <!-- 热门评论 -->
      <detail-comment name="评论" :ref="getSectionRefs" :comment="mainPart.dynamicModule.commentModule"/>

      <!-- 预定须知 -->
      <detail-notice name="须知" :ref="getSectionRefs" :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />

      <!-- 地图 -->
      <detail-map name="地图" :ref="getSectionRefs" :position="mainPart.dynamicModule.positionModule"/>

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
  position: relative;
  height: 100vh;
  background-color: #fff;
  overflow-y: auto;

  .tabs {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
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
}
</style>
