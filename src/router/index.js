import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  // history模式
  history: createWebHistory(),
  // 路由配置
  routes: [
    {
      path: '/',
      redirect: 'Home',
    },
    {
      path: '/Home',
      component: () => import('../views/Home/Home.vue'),
    },
    {
      path: '/Favor',
      component: () => import('../views/Favor/Favor.vue'),
    },
    {
      path: '/Message',
      component: () => import('../views/Message/Message.vue'),
    },
    {
      path: '/Order',
      component: () => import('../views/Order/Order.vue'),
    }
  ]
})

// 导出路由
export default router;