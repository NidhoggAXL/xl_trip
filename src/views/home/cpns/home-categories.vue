<script setup>
import { useHomeStore } from '@/store/modules/home';

const homeStore = useHomeStore()

</script>

<template>
  <div class="categories">
    <template v-for="(item, index) in homeStore.categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  align-items: center;
  // 隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: flex;
    width: 70px;
    height: 80px;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 32px;
      height: 32px;
    }
    .title {
      margin-top: 8px;
      font-size: 12px;
    }
  }
}
</style>