import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './rootReducers'

let storeEnhances = compose(applyMiddleware(thunk))

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducers, initialState, storeEnhances)
  return store
}

export default configureStore()
