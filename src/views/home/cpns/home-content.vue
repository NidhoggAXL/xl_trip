<script setup>
import { useHomeStore } from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue';
import HouseItemV9 from '@/components/house-item-v9/house-item-v9.vue';

const homeStore = useHomeStore()
const { houselist }  = storeToRefs(homeStore)
</script>

<template>
  <div class="home-content">
    <h1 class="title">热门精选</h1>
    <div class="list">
      <template v-for="item in houselist" :key="item.data.houseId">
        <house-item-v9 :item-data="item.data" v-if="item.discoveryContentType === 9" />
        <house-item-v3 :item-data="item.data" v-else-if="item.discoveryContentType === 3" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-content {
  padding: 8px;
  .title {
    padding: 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>