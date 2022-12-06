/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-12-06 15:19:19
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue-ts\src\vuex.d.ts
 * @Description: 解决 Vuex 上无法使用 $store 的问题
 */
// vuex.d.ts
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    name: string
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
