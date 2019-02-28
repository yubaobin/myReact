/**
 *  用户通过dispatch出发action，action通过reduce函数更新state，更新视图
 */
import { LOGIN_REQUEST, LOGIN_COMPLETE, LOGIN_FAIL } from './action-type'

export const userLogin = () => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  const num = Math.ceil(Math.random() * 10)
  window.setTimeout(() => {
    if ( num % 2 === 0) {
      dispatch({ type: LOGIN_COMPLETE, data: { name: '异步加载' } });
    } else {
      dispatch({ type: LOGIN_FAIL, data: { msg: '错误了' } });
    }
  }, 2000)
}
