import axios from 'axios'
import { API_BASE_URL } from '@/config'

import { message } from 'antd'
import { getToken } from '@/utils'

// 创建axios
const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

// 拦截请求，携带Token
service.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    message.error('Bad request')
    Promise.reject(error)
  }
)
export default service
