/**
 *  用户通过dispatch出发action，action通过reduce函数更新state，更新视图
 */

import { LOGIN_BEFORE, LOGIN_COMPLETE, LOGIN_FAIL  } from './action-type';
import { loginApi } from '@/api';
import doAction from '@/store/utils';
import utils from '@/utils';

export const userLogin = (params) => (dispatch) => {
  const actionTpyes = { before: LOGIN_BEFORE, complete: LOGIN_COMPLETE, fail: LOGIN_FAIL }
  doAction({ actionTpyes, params, api: loginApi }, dispatch).then(res => {
    utils.setUserInfoToCache(res.data)
  })
}
