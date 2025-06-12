<script setup>
import useCityStore from '@/store/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';


// 定义接收的数据
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

//获取动态indexList
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  // 因为多出来热门内容,所有要多添加一个#号,这样索引才正常
  list.unshift("#")
  return list
})

// 监听城市的点击
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  // 通过Pinia的Store来存储数据
  // console.log(city)
  cityStore.currentCity = city
  // 路由回跳上一级
  router.back()
}
</script>

<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9645" :index-list="indexList">

      <!-- 热门城市展示 -->
      <van-index-anchor index="热门" />
      <div class="hot-city">
        <template v-for="(item, index) in groupData.hotCities" :key="index">
          <div class="city" @click="cityClick(item)">{{ item.cityName }}</div>
        </template>
      </div>

      <!-- 所有城市的展示 -->
      <template v-for="(item, index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(iten, indey) in item.cities" :key="indey">
          <van-cell :title="iten.cityName" @click="cityClick(iten)"/>
        </template>
      </template>

    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
.city-group {
  .hot-city {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .city {
    width: 70px;
    height: 28px;
    text-align: center;
    border-radius: 14px;
    line-height: 28px;
    font-size: 12px;
    background-color: #fff4ec;
    margin: 6px;
  }
}
}
</style>