<script setup>
  defineProps({
    groupData: {
      type: Object,
      default: () => ({})
    }
  })

</script>

<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9645">
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

</style>