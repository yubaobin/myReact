/**
 *  根据action返回新的state更新试图
 */

import * as actionType from './actionType';

import config from '@/config'

const TOKEN = config.accessToken || 'token'
/**
 * 初始化state
 * state: 0为成功, 其他为失败
 */

const initUserState = {
  userInfo: {},
  remainTime: 0,
  token: '',
  loginLoad: false,
  errMsg: ''
};

export default (state = initUserState, action) => {
  switch (action.type) {
    case actionType.loading:
      return Object.assign({}, state, { loginLoad: true });

    case actionType.fail:
      return Object.assign({}, state, { loginLoad: false, errMsg: action.error });

    case actionType.logout:
      return Object.assign({}, state, initUserState )

    case actionType.loginSuccess:
      const data = action.data;
      const remainTime = action.remainTime
      return Object.assign({}, state, {
        userInfo: data,
        loginLoad: false,
        remainTime: remainTime,
        token: data[TOKEN]
      });

    default:
      return state;
  }
}

