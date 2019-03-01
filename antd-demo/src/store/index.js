import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import utils from '@/utils';
import reducers from '@/store/reducers';
import { initUserState } from '@/store/user/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 从本地缓存中获取userinfo
const loadUserState = () => {
  const userInfo = utils.getUserInfoFromCache();
  if (userInfo) {
    const userState = Object.assign({}, initUserState, { userInfo } )
    return { userState }
  } else {
    return undefined
  }
}

// 创建
const store = createStore(
  reducers,
  loadUserState(),
  composeEnhancers(
    applyMiddleware(thunk, promise)
  )
)

export default store
