<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const cityClick = () => {
  router.push('/city')
};

</script>

<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position">
        <div class="mine">我的位置</div>
        <img src="@/assets/imgs/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-box {
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 15px;

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
}
</style>