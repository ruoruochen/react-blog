import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
// let storeEnhances = compose(applyMiddleware(thunk))

let storeEnhancers
if (process.env.NODE_ENV === 'production') {
  storeEnhancers = compose(applyMiddleware(thunk))
} else {
  storeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk)))
}

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducers, initialState, storeEnhancers)
  return store
}

export default configureStore()
