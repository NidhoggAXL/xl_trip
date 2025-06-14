<script setup>
import { getHotSuggests } from '@/server';
import useCityStore from '@/store/modules/city';
import { useHomeStore } from '@/store/modules/home';
import { formatMouthDate } from '@/utils/formate-date';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 路由跳转city页面
const router = useRouter()
const cityClick = () => {
  router.push('/city')
};

// 当前城市数据的获取
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 获取时间
// 1. 获取当天时间
const today = new Date()
// 2. 格式化当天时间
const startDate = ref(formatMouthDate(today))
// 3. 对当天的时间+1天,获得明天的时间
const tommorrow = today.setDate(today.getDate() + 1)
// 4. 格式话明天
const endDate = ref(formatMouthDate(tommorrow))


// 日历选择
// 1. 第一次的默认不显示日历,获取路由
const showCalendar = ref(false)
// 2. 确定返回选择日期的数据,
const onConfirm = (value) => {
  // console.log(value)
  // console.log(value[0])//开始时间
  // console.log(value[1])//结束时间
  startDate.value = formatMouthDate(value[0])
  endDate.value = formatMouthDate(value[1])
  showCalendar.value = false
}
// 3. 选择时长的时候,显示日历
const calendarClick = () => {
  showCalendar.value = true
}

// 热门城市数据
// 发送热门城市的网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
// const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
// console.log(hotSuggests)

</script>


<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position">
        <div class="mine">我的位置</div>
        <img src="@/assets/imgs/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 入住时长选择 -->
    <div class="date-range" @click="calendarClick">
      <div class="star">
        <div class="tip">入住</div>
        <div class="time">{{ startDate }}</div>
      </div>
      <div class="process">共一晚</div>
      <div class="end">
        <div class="tip">离店</div>
        <div class="time">{{ endDate }}</div>
      </div>
    </div>

    <!-- 日历的选择 -->
    <div class="calendar">
      <van-calendar 
      v-model:show="showCalendar" 
      type="range"
      color="#ff9645"
      :round="false"
      @confirm="onConfirm"
      />
    </div>

    <!-- 价格以及人数限制 -->
    <div class="price-counter">
      <span class="price">价格不限</span>
      <span class="person">人数不限</span>
    </div>

    <!-- 关键字 -->
    <div class="keyword">关键字/位置/民宿名</div>

    <!-- 热门城市推荐 -->
    <div class="hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="city">{{ item.tagText.text }}</div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="search-btn">
      <div class="btn">开始搜索</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 整体样式
.search-box {
  padding: 0 20px;
}

// 位置信息样式
.location {
  display: flex;
  align-items: center;
  height: 44px;


  .city {
    flex: 1;
  }
  .position {
    display: flex;
    align-items: center;

    .mine {
      font-size: 12px;
      color: #555;
    }
    img {
      width: 20px;
      margin: 0 5px;
    }
  }
}

// 入住时长选择
.date-range {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;

  .process {
    color: #666;
    font-size: 12px;
  }

  .end {
    padding-right: 50px;
  }

  .tip {
    color: #999;
    font-size: 12px;
  }

  .time {
    color: #333;
    font-size: 15px;
    margin-top: 3px;
  }
}

// 价格以及人数限制
.price-counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  color: #999;
  font-size: 14px;

  .person {
    padding-right: 50px;
  }
}

// 关键字
.keyword {
  color: #999;
  font-size: 14px;
  height: 44px;
  line-height: 44px;
}

// 热门城市推荐
.hot-suggests {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  .city {
    margin: 3px;
    padding: 4px 8px;
    border-radius: 14px;
    color: #3f4954;
    background-color: #f1f3f5;
    font-size: 12px;
  }
}

// 搜索按钮
.search-btn{
  .btn {
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}

</style>