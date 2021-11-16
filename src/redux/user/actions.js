import * as TYPES from '@/redux/types'
export const login = (params) => ({
  type: TYPES.USER_LOGIN,
})

export const register = (params) => ({
  type: TYPES.USER_REGISTER,
})

export const logout = () => ({
  type: TYPES.USER_LOGOUT,
})
