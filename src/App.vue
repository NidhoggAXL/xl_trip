<script setup>

import TabBar from '@/components/tab-bar/tab-bar.vue'
import loading from './components/loading/loading.vue';
import { useRoute } from 'vue-router';

//当前活跃的路由
const route = useRoute()
</script>

<template>
  <div class="app">

    <!-- name属性 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>

    <TabBar v-show="!route.meta.hideTabbar" />
    <loading />
  </div>
</template>

<style lang="less" scoped>

</style>