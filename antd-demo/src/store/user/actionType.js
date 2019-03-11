/**
 * 请求type
 */
import { createActionType } from '@/store/utils'

const namespace = 'user'

export const loading = createActionType(namespace, 'loading');
export const fail = createActionType(namespace, 'fail');
export const loginSuccess = createActionType(namespace, 'loginSuccess');
export const logoutSuccess = createActionType(namespace, 'logoutSuccess');

export const loginAction = createActionType(namespace, 'loginAction');
export const logoutAction = createActionType(namespace, 'logoutAction');