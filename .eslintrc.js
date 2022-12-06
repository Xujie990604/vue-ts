/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-12-05 22:30:39
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue-ts\.eslintrc.js
 * @Description: eslint配置文件
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
