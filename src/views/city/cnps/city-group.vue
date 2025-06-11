<script setup>
import { computed } from 'vue';

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
</script>

<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9645" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hot-city">
        <template v-for="(item, index) in groupData.hotCities" :key="index">
          <div class="city">{{ item.cityName }}</div>
        </template>
      </div>

      <template v-for="(item, index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(iten, indey) in item.cities" :key="indey">
          <van-cell :title="iten.cityName" />
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