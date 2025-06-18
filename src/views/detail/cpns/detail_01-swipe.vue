<script setup>
// 接收swipe的数据
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

// 对获取的数据进行分组
const swipeGroup = {}
for(let item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  //valueArray是同一个引用
  valueArray.push(item)
}


//使用正则表达式格式title
const nameReg = /^【(.*)】：/
const getName = (name) => {
  const results = nameReg.exec(name)
  return results[1]
}

// 获取索引来正确显示指示器
const getCategoryIndex = (item) => {
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}

</script>

<template>
  <div class="swipe">

    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="item.orderIndex">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

      //具名插槽作用域
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value, key, index) in swipeGroup"  :key="key">
            <!-- key是String类型,而enumPictureCategory是Number,使用相对等于(==) -->
            <span 
              class="title"   
              :class="{active: swipeData[active]?.enumPictureCategory == key}"
            >
              <span class="text">{{ getName(value[0].title) }}</span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
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
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    .title {
      margin: 0 4px;
      &.active {
        padding: 0 4px;
        border-radius: 4px;
        background-color: #fff;
        color: black;
      }
    }
  }
}
</style>