import { combineReducers } from 'redux';
import userState from '@/store/user/reducer';

// 合并reducers
const reducers = combineReducers({
  userState
})

export default reducers
