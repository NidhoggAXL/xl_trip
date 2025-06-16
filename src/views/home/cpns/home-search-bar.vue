<script setup>
import useMainStore from '@/store/modules/main';
import { formatMouthDate } from '@/utils/formate-date';
import { storeToRefs } from 'pinia';

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = formatMouthDate(startDate.value, 'MM.DD')
const endDateStr = formatMouthDate(endDate.value, 'MM.DD')
</script>

<template>
  <div class="search">
    <div class="select-item">
      <div class="item start">
        <span class="name">住</span>
        <span class="data">{{ startDateStr }}</span>
      </div>
      <div class="item end">
        <span class="name">离</span>
        <span class="data special">{{ endDateStr }}</span>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-serach"></i>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search {
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 10px;
  border-radius: 1.6vw;
  background-color: #f2f4f6;
  color: #999;
  .select-item {
    font-size: 10px;
    .item {
      margin: 2px 0;
      .data {
        color: #333;
        margin: 0 10px 0 3px;
        position: relative;
      }
      .special {
        &::after {
          content: " ";
          width: 0;
          height: 0;
          border: 1.06667vw solid #666;
          border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
          border-radius: 0.8vw;    transform: rotate(45deg);
          position: absolute;
          bottom: 0px;
          right: -3.2vw;
        }
      }
    }
  }
  .content {
    font-size: 12px;
    flex: 1;
  }
  .right {
    .icon-serach {
      width: 24px;
      height: 24px;
      display: inline-block;
      background-image: url(@/assets/imgs/home/home-sprite.png);
      background-position: -29px -151px;
      background-size: 207px 192px;
    }
  }
}

</style>