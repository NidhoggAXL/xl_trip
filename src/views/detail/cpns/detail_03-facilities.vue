<script setup>
import detailSelect from '@/components/detail-select/detail-select.vue';

const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => ({})
  }
})


</script>

<template>
  <div class="detail-fecilities">
    <detail-select title="房屋设施" more-text="查看全部设施">
      <template v-for="(item, index) in houseFacility.houseFacilitys" :key="index">

        <div class="item" v-if="houseFacility.facilitySort.includes(index)">

          <div class="head">

            <img class="headImg" :src="item.icon" alt="">
            <div class="text">{{ item.groupName }}</div>

          </div>

          <div class="list">

            <template v-for="(iten, indey) in item.facilitys.slice(0, 4)" :key="indey">
              <div class="iten">
                <i class="icon_check"></i>
                <span class="text">{{ iten.name }}</span>
              </div>
            </template>

          </div>

        </div>

      </template>
    </detail-select>
  </div>
</template>

<style lang="less" scoped>
.item {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #000;
  margin: 20px 0;
  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90px;
    .headImg {
      width: 20px;
      height: 20px;
      margin-bottom: 3px;
    }
  }
  .list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .iten {
      width: 50%;
      margin: 5px 0;
    }
  }
}
</style>