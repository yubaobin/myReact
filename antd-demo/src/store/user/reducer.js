/**
 *  根据action返回新的state更新试图
 */

import { LOGIN_BEFORE, LOGIN_COMPLETE, LOGIN_FAIL  } from './action-type'
import config from '@/config'

const TOKEN = config.accessToken || 'token'
/**
 * 初始化state
 * state: 0为成功, 其他为失败
 */

const initUserState = {
  userInfo: {},
  isLogin: false,
  loginLoad: false,
  loginTime: null,
  actionToken: ''
};

export { initUserState };

export default (state = initUserState, action) => {
  switch (action.type) {
    case LOGIN_BEFORE: // 请求之前
      return Object.assign({}, state, { userInfo: {}, isLogin: false, loginLoad: true, loginTime: null });;

    case LOGIN_COMPLETE: // 请求完成
      const data = action.data.data;
      return Object.assign({}, state, {
        userInfo: data,
        isLogin: true,
        loginLoad: false,
        loginTime: Date.now(),
        actionToken: data[TOKEN]
      });

    case LOGIN_FAIL: // 请求失败
      return Object.assign({}, state, { userInfo: {}, isLogin: false, loginLoad: false, loginTime: null });;

    default:
      return state;
  }
}

