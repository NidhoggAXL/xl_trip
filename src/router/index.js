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
      component: () => import('../views/home/home.vue'),
    },
    {
      path: '/Favor',
      component: () => import('../views/favor/favor.vue'),
    },
    {
      path: '/Message',
      component: () => import('../views/message/message.vue'),
    },
    {
      path: '/Order',
      component: () => import('../views/order/order.vue'),
    }
  ]
})

// 导出路由
export default router;