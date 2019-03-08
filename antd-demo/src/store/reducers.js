import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import userState from '@/store/user/reducer';

// 合并reducers
export default (history) => combineReducers({
  router: connectRouter(history),
  userState
})
