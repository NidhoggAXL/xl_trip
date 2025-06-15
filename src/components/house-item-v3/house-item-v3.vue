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
      <div class="cover">
        <img :src="itemData.image.url" :style="{width: '100%'}">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/imgs/home/location.png" :style="{ width: '12px' }">
          <span>{{ itemData.location }}</span>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="price">
          <span class="finalPrice">{{ "￥" + itemData.finalPrice }}</span>
          <span class="productPrice">{{ "￥" + itemData.productPrice }}</span>
          <span class="priceTipBadge">{{ itemData?.priceTipBadge?.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.house-item {
  width: 50%;
  .item-inner {
    margin: 5px;
    border-radius: 1.6vw;
    overflow: hidden;

    .info {
      padding: 8px 10px;
      font-size: 12px;
      color: #666;
      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 14px;
        color: black;
      }
      .price {
        margin: 8px 0;
        .finalPrice {
          font-size: 14px;
          color: var(--primary-color);
          margin: 0 4px;
        }
        .productPrice {
          text-decoration: line-through;
        }
        .priceTipBadge {
          color: #fff;
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          margin: 0 4px;
          padding: 0 1.6vw;
          border-radius: 2.13333vw;
        }
      }
    }
  }
}
</style>