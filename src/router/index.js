// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

// 导入页面组件
import mainPages from '../mainPages/index.vue'

const routes = [
  { path: '/home', component: mainPages },
  // 重定向：访问 / 自动跳转到 /home
  { path: '/', redirect: '/home' }
]

// 创建路由器实例，使用 Hash 模式
const router = createRouter({
  history: createWebHashHistory(), // 关键：使用 Hash 模式
  routes
})

export default router
