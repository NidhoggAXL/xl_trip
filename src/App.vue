<script setup>
import { useRoute } from 'vue-router';
import TabBar from '@/components/tab-bar/tab-bar.vue'
const route = useRoute();
</script>

<template>
  <div class="app">
    <router-view />
    <TabBar v-if="!route.meta.hideTabbar" />
  </div>
</template>

<style lang="less" scoped>

</style>