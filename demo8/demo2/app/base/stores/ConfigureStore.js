import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'; 

//叠加一些中间件
let createStoreWithMiddleware = compose(
    applyMiddleware(thunk),//
    applyMiddleware(createLogger()) //数据变更过程中在浏览器console窗口打印数据
)(createStore);

//加载reducers
export default function ConfigureStore(initialState) { 
  
  const store = createStoreWithMiddleware(reducers, initialState); 
  if (module.hot) { 
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  } 
  return store;
}
