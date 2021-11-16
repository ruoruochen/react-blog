import { get, save, remove } from '@/utils/storage'
import * as TYPES from '@/redux/types'
/* ============  state  ============*/
let defaultState = {
  username: '',
  role: 2,
  userId: 0,
  github: null,
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
    case TYPES.USER_LOGIN:
      console.log('login')
      const { username, userId, role, github = null, token } = payload || {}
      save('userInfo', { username, userId, role, github, token })
      return { ...state, username, userId, role, github }
    case TYPES.USER_LOGOUT:
      console.log('logout')
      remove('userInfo')
      return { ...defaultState }
    case TYPES.USER_REGISTER:
      console.log('register')
      return state
    default:
      return state
  }
}
