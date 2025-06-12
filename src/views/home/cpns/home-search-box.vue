<script setup>
import useCityStore from '@/store/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// 路由跳转city页面
const router = useRouter()
const cityClick = () => {
  router.push('/city')
};

// 当前城市数据的获取
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
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

    <!-- 入住时间选择 -->
    <div class="date-range">
      <div class="star">
        <div class="tip">入住</div>
        <div class="time">8月25日</div>
      </div>
      <div class="process">共一晚</div>
      <div class="end">
        <div class="tip">离店</div>
        <div class="time">8月25日</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 位置信息样式
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

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

// 入住时间选择
.date-range {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
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
</style>