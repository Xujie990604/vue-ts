/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-12-05 22:30:39
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue-ts\src\main.ts
 * @Description: 入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerApp from './global/index'

const app = createApp(App)
// 一些第三方插件的注册统一使用 registerApp 函数
registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')
