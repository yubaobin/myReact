import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import createRootReducer from '@/store/reducers';
import rootSaga from './sagas';
import config from '@/config'
import utils from '@/utils';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 从本地缓存中获取userInfo, 主要是处理刷新页面
const loadUserState = () => {
  const userInfo = utils.getUserInfoFromCache();
  const remainingTime = utils.getLoginRemainingTime(); // 登陆剩余时间
  const token = utils.getAccessToken();
  if (userInfo) {
    const userState = Object.assign({}, { userInfo, remainingTime, token } )
    return { userState }
  } else {
    return undefined
  }
}

const history = createBrowserHistory({
  basename: config.root
})
// saga
const sagaMiddleware = createSagaMiddleware()

const loggerWares = [];
if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({
    predicate: (getState, action) => action.type !== '@@router/LOCATION_CHANGE'
  })
  loggerWares.push(logger);
}

// 创建
const store = createStore(
  createRootReducer(history),
  loadUserState(),
  composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history), ...loggerWares)
  )
)

sagaMiddleware.run(rootSaga)

export { history }
export default store;
