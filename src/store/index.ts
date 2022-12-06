/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-12-06 15:06:49
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue-ts\src\store\index.ts
 * @Description: Vuex文件
 */
import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'xujie'
    }
  },
  getters: {},
  mutations: {},
  actions: {}
})

export default store
