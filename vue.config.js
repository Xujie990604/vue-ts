/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-12-05 22:30:39
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue-ts\vue.config.js
 * @Description: Vue/Webpack 配置文件
 */

// 使用 @vue/cli-service 提供的 defineConfig 助手函数来获取更好的类型提示
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack 中的对象会合并到 webpack 配置文件中，并且在这里使用的配置项名称和 webpack 保持一致
  configureWebpack: {
    resolve: {
      alias: {
        // 配置别名，@是脚手架自动配置的src文件夹的别名
        components: '@/components',
        assets: '@/assets'
      }
    }
  }
})
