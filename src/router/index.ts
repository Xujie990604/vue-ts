/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-12-06 14:25:09
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue-ts\src\router\index.ts
 * @Description: 路由文件
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// type 关键字表示导入的是一个类型
import type { RouteRecordRaw } from 'vue-router'

// RouteRecordRaw 是在 VueRouter 中定义的 TS 类型
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/myLogin.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/myMain.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
