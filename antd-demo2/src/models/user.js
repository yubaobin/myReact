import { setUserInfoToCache, removeUserInfoFromCache } from '@/utils/user';
export default {
  namespace: 'user',
  state: {
    user: {},
    token: '',
  },
  subscriptions: {},
  effects: {},
  reducers: {
    changeUserInfo(state, { payload }) {
      if (payload.token) {
        setUserInfoToCache(payload.user);
      } else {
        removeUserInfoFromCache();
      }
      return {
        ...state,
        user: payload.user,
        token: payload.token
      }
    }
  },
};