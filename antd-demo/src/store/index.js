import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from '@/store/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk, promise)
  )
)

export default store
