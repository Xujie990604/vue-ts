/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-12-28 19:05:31
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue-ts\src\service\index.ts
 * @Description: 导出 axios 实例(每个实例可以设置不同的 baseURl 和 timeout 等属性)
 */
import Request from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default request
