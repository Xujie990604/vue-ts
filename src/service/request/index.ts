/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-12-28 19:08:27
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue-ts\src\service\request\index.ts
 * @Description: 导出自定义的 axios 请求类
 */

import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义的拦截器的类型
interface RequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 扩充原有的 AxiosRequestConfig 类型,增加一个 拦截器类型的数据
interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}

class Request {
  // axios 的实例
  instance: AxiosInstance
  // 拦截器
  interceptors?: RequestInterceptors

  constructor(config: RequestConfig) {
    // 生成 axios 实例
    this.instance = axios.create(config)
    // 保存传进来的拦截器
    this.interceptors = config.interceptors

    // 使用实例创建时传入的请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 使用实例创建时传入的响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  // 发起网络请求的方法
  request(config: RequestConfig) {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default Request
