import { createApp } from 'vue'
// 引入路由
import router from './router'
// 状态管理
import store from './store'

// 引入样式重置
import 'normalize.css'
import './assets/css/index.css'

import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
