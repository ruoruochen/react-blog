import {createStore} from 'redux'
import rootReducers from './rootReducers'

let storeEnhances 

const configureStore = (initialState = {})=>{
  const store = createStore(rootReducers,initialState,storeEnhances)
  return store
}

export default configureStore();