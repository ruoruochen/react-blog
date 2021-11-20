import { get, save, remove } from '@/utils/storage'
import * as TYPES from '@/redux/types'
/* ============  state  ============*/
let defaultState = {
  loading: false,
  username: '',
  role: 2,
  userId: 0,
  github: null,
  error: null,
}

// 从本地存储中取出
const userInfo = get('userInfo')

if (userInfo) {
  defaultState = { ...defaultState, ...userInfo }
}

/* ============  reducer  ============*/
export default function userReducer(state = defaultState, action) {
  const { type, payload } = action
  switch (type) {
    case TYPES.USER_LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case TYPES.USER_LOGIN_SUCCESS:
      const { username, userId, role, github = null, token } = payload || {}
      save('userInfo', { username, userId, role, github, token })
      return {
        ...state,
        username: username,
        userId,
        role,
        github,
        loading: false,
      }
    case TYPES.USER_LOGIN_ERROR:
      return { ...state, loading: false, error: payload }
    case TYPES.USER_LOGOUT:
      console.log('logout')
      remove('userInfo')
      return {
        loading: false,
        username: '',
        role: 2,
        userId: 0,
        github: null,
        error: null,
      }

    case TYPES.USER_REGISTER_BEGIN:
      return { ...state, loading: true }
    case TYPES.USER_REGISTER_SUCCESS:
      return { ...state, loading: false }
    case TYPES.USER_REGISTER_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}
