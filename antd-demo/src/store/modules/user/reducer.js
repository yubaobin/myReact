/**
 *  根据action返回新的state更新试图
 */

import { LOGIN_REQUEST, LOGIN_COMPLETE, LOGIN_FAIL } from './action-type'
/**
 * 初始化state
 */
const initState = {
  isLoading: false,
  user: {},
  msg: ''
};

/**
 * reducer
 */
export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, { isLoading: true, user: {}, msg: ''});
    case LOGIN_COMPLETE:
      return Object.assign({}, state, { isLoading: false, user: action.data, msg: '' });
    case LOGIN_FAIL:
      return Object.assign({}, state, { isLoading: false, user: {}, msg: action.data.msg });
    default:
      return state;
  }
}