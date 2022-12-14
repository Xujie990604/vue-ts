<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-12-05 22:30:52
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue-ts\README.md
 * @Description: 项目文件的说明
-->

# vue-ts

## 技术栈

- Vue3 + Router + Vuex
- TS

## 项目的目录结构

.env.development 定义一些只有在开发环境中才能使用的常量
.env.production  定义一些只有在生产环境中才能使用的常量

## 代码规范约束

1. .editorconfig 文件对代码进行约束(是在写代码的时候进行约束)
2. 项目安装 prettier 依赖, 定义 .prettierrc 文件来进行代码的格式化(是在保存代码的时候进行格式的自动修改)
3. 项目安装 eslint 依赖，定义 。而是eslint.js 文件来进行代码的约束(在书写代码时的提示和约束)
4. 项目安装 eslint-plugin-prettier eslint-config-prettier 插件来整合 eslint prettier 之间的冲突
5. 项目安装 husky 依赖，对 git 进行约束，在 .husky 文件夹中进行配置
6. 项目安装 commitizen 依赖对于 commit 信息进行格式化步骤, 以后进行 commit 命令时替换成 npm run commit 命令
7. 项目安装 @commitlint/config-conventional @commitlint/cli 依赖对于 commit 的文本进行规范性检测，使用commitlint.config.js 引入这个依赖
