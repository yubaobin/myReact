import { all, fork } from 'redux-saga/effects';
import userSage from './user/saga'
export default function* root() {
  yield all([
    fork(userSage)
  ]);
}