<script setup>

defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="item.orderIndex">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.swipe-list {
  .item {
    img{
      width: 100%;
    }
  }
}
</style>