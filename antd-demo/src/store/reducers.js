import { combineReducers } from 'redux'
import bookState from '@/store/modules/book/reducer'
import userState from '@/store/modules/user/reducer'
const reducers = combineReducers({
  bookState, userState
})

export default reducers