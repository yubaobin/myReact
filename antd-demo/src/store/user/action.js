/**
 *  用户通过dispatch出发action，action通过reduce函数更新state，更新视图
 */

import * as actionType from './actionType';
export const userLogin = (params) => {
  return {
    type: actionType.loginAction,
    payload: params
  }
}

export const userLogout = () => {
  return {
    type: actionType.logoutAction
  }
}