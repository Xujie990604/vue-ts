<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-12-05 22:30:39
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue-ts\src\App.vue
 * @Description: Vue根组件
-->
<template>
  <div class="app">
    {{ $store.state.name }}
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="scss"></style>
