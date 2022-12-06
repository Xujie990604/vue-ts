/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-12-06 18:27:48
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue-ts\src\global\index.ts
 * @Description:
 */

import type { App } from 'vue'
import ElementPlus from './register-element'

export default function (app: App) {
  app.use(ElementPlus)
}
