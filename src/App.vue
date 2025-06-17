<script setup>

import TabBar from '@/components/tab-bar/tab-bar.vue'
import loading from './components/loading/loading.vue';
import { useRoute } from 'vue-router';

//当前活跃的路由
const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view />
    <TabBar v-if="!route.meta.hideTabbar" />
    <loading />
  </div>
</template>

<style lang="less" scoped>

</style>