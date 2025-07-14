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
      // 路由元信息
      meta: {
        hideTabbar: true
      }
    },
    {
      path: '/Order',
      component: () => import('../views/order/order.vue'),
    },
    {
      path: '/city',
      component: () => import('../views/city/city.vue'),
      // 路由元信息
      meta: {
        hideTabbar: true
      }
    },
    {
      path: '/search',
      component: () => import('../views/serach/search.vue'),
      meta: {
        hideTabbar: true
      }
    },
    {
      //动态路由
      path: '/detail/:id',
      component: () => import('../views/detail/detail.vue'),
      meta: {
        hideTabbar: true
      }
    },
  ]
})

// 导出路由
export default router;