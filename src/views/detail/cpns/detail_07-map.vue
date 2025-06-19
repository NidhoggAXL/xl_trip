
<script setup>
import detailSelect from '@/components/detail-select/detail-select.vue';
import { onMounted, ref } from "vue";

const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
})

// 要保证要进行map的container的DOM挂在完成
onMounted(() => {
  const map = new BMapGL.Map(container); // 创建地图实例 
  const point = new BMapGL.Point(props.position.longitude, props.position.latitude); // 创建点坐标 
  map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
  const marker = new BMapGL.Marker(point);  //设置图标
  map.addOverlay(marker) //把图标添加到地图中
})
</script>

<template>
  <div class="map">
    <detail-select title="位置 周边" more-text="查看更多周边信息"> 
      <div id="container"></div>
    </detail-select>
  </div>
</template>

<style lang="less" scoped>
#container {
  height: 250px;
}
</style>