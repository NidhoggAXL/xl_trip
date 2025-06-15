<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover" :style="{}">
        <img :src="itemData.image.url" :style="{width: '100%'}">
      </div>
      <div class="info">
        <div class="summary" >{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="desc">
          <van-rate 
            :model-value="Number(itemData.commentScore)" 
            :size="15"
            color="#ff9645"
            allow-half
            readonly
          />
          <span class="price">{{"￥" + itemData.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.house-item {
  width: 50%;
  .item-inner {
    position: relative;
    color: #fff;
    border-radius: 1.6vw;
    overflow: hidden;
    margin: 5px;
    .info {
      position: absolute;
      bottom: 0;
      padding: 8px;
      .summary {
        font-size: 12px;
      }
      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .desc {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>