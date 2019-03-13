import { routerRedux } from 'dva/router';
import { loginApi } from '@/api/user';
import { stringify } from 'qs';

import { getPageQuery, isUrl } from '@/utils/utils';
import config from '@/config';

const TOKEN = config.accessToken

export default {
  namespace: 'login',
  state: { status: null },
  subscriptions: {},
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(loginApi, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: { status: response.status },
      });
      if (response.status === 'success') {
        const userInfo = response.data;
        yield put({
          type: 'user/changeUserInfo',
          payload: { user: userInfo, token: userInfo[TOKEN] }
        });
        const params = getPageQuery();
        const { redirect } = params;
        if (isUrl(redirect)) {
          window.location.href = redirect;
        } else {
          yield put(routerRedux.replace(redirect || '/'));
        }
        return;
      } else {
        return response;
      }
    },

    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: { status: false },
      });
      yield put({
        type: 'user/changeUserInfo',
        payload: { user: {}, token: '' }
      });
      yield put(routerRedux.push({
        pathname: '/login',
        search: stringify({
          redirect: window.location.href
        })
      }))
    }
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        status: payload.status
      }
    }
  },
};