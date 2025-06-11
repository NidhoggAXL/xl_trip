<script setup>
  defineProps({
    groupData: {
      type: Object,
      default: () => ({})
    }
  })

</script>

<template>
  <div class="city-group">
    <template v-for="(item, index) in groupData.cities" :key="index">
        <div class="group-item">
          <h2 class="title">{{ item.group }}</h2>
          <div class="list">
            <template v-for="(iten, indey) in item.cities" :key="indey">
              <div class="city">{{ iten.cityName }}</div>
            </template>
          </div>
        </div>
      </template>
  </div>
</template>

<style lang="less" scoped>

</style>