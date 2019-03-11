import * as actionType from './actionType';
import { replace } from 'connected-react-router'
import { takeLatest, put, call, all } from 'redux-saga/effects';
import { loginApi } from '@/api';
import utils from '@/utils';

function* userLogin(action) {
  try {
    yield put({ type: actionType.loading });
    const data = yield call(loginApi, action.payload);
    if (data.status === 'success') {
      const userInfo = data.data
      utils.setUserInfoToCache(userInfo)
      yield put({ type: actionType.loginSuccess, data: userInfo });
      yield put(replace('/'));
    } else {
      yield put({ type: actionType.fail, data });
    }
  } catch (error) {
    yield put({ type: actionType.fail, error });
  }
}

function* userLogout() {
  utils.removeUserInfoFromCache();
  yield put({ type: actionType.logoutSuccess })
  yield put(replace('/user/login'))
}

function* userSaga() {
  yield all([
    takeLatest(actionType.loginAction, userLogin),
    takeLatest(actionType.logoutAction, userLogout)
  ])
}

export default userSaga