import { combineReducers } from 'redux'
import user from './user/reducer'
import article from './article/reducer'
export default combineReducers({ user, article })
