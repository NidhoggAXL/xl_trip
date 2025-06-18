<script setup>
defineProps({
  topModule: {
    typeof: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="detail-infos">

    <div class="name">{{ topModule.houseName }}</div>

    <div class="houseTags">
      <template v-for="(item, index) in topModule.houseTags">
        <span 
          class="tag"
          v-if="item.tagText" 
          :style="{ color: item.tagText.color, background: item.tagText.background.color}"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>

    <div class="comment flex">
      <div class="left">
        <span class="overall">{{ topModule.commentBrief.overall }}</span>
        <span class="title">{{ topModule.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ topModule.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="count">{{ topModule.commentBrief.totalCount }}条评论</span>
        <van-icon name="arrow" color="#ff9645" />
      </div>
    </div>

    <div class="position flex">
      <div class="left">
        <div class="address">{{ topModule.nearByPosition.address }}</div>
      </div>
      <div class="right">
        <span class="map">地图·周边</span>
        <van-icon name="arrow" color="#ff9645" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>

.detail-infos {
  padding: 16px;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0;
    padding: 8px 12px;
    background-color: #f5f7fa;
    border-radius: 4px;
  }


  .name {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    margin-bottom: 6px;
  }

  .houseTags {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 3px;
    .tag {
      font-size: 12px;
      padding: 3px;
    }
  }

  .comment {
    .left {
      font-weight: 700;
      color: #333;
      .overall {
        font-size: 18px;
      }
      .title {
        font-size: 12px;
        margin: 0 2px;
      }
      .brief {
        font-size: 12px;
        color: #666;
      }
    }

    .right {
      font-size: 12px;
      color: var(--primary-color);
      .count {
        margin: 0 3px;
      }
    }
  }

  .position {
    font-size: 14px;
    font-weight: 700;
    color: #333;
    .map {
      font-size: 12px;
      font-weight: normal;
      color: var(--primary-color);
      margin: 0 3px;
    }
  }
}
</style>