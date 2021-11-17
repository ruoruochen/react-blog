import * as TYPES from '@/redux/types'
import axios from '@/utils/axios'
import { message } from 'antd'
// thunk函数
export const login = (params) => (dispatch) => {
  dispatch({
    type: TYPES.USER_LOGIN_BEGIN,
  })
  // 发送异步请求
  axios.post('/login', params).then(
    (res) => {
      // 派发Action
      dispatch({
        type: TYPES.USER_LOGIN_SUCCESS,
        payload: res.data,
      })
      message.success(`登陆成功,欢迎您 ${res?.username}`)
    },
    // TODO:如何获取meta.msg 区分不同的登录失败原因
    (e) => {
      dispatch({
        type: TYPES.USER_LOGIN_ERROR,
        payload: '登陆失败',
      })
      message.error('登陆失败!')
    }
  )
}

export const register = (params) => (dispatch) => {
  dispatch({
    type: TYPES.USER_REGISTER_BEGIN,
  })
  axios
    .post('/register', params)
    .then((res) => {
      dispatch({
        type: TYPES.USER_REGISTER_SUCCESS,
        payload: res.data,
      })
      message.success('注册成功，请登录')
    })
    .catch((err) => {
      dispatch({
        type: TYPES.USER_REGISTER_ERROR,
        payload: '注册失败',
      })
      message.error('注册失败')
    })
}

export const logout = () => ({
  type: TYPES.USER_LOGOUT,
})
