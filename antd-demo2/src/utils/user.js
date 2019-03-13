import lscache from 'lscache'
import config from '@/config'
const TOKEN = config.accessToken || 'token'
const LOGIN_TIME = 'UserLoginTime'
const USER_INFO = 'UserInfo'

/**
 * 获取登录剩余时间秒数
 * @returns {number}
 */
export const getLoginRemainingTime = () => {
  const loginTime = Math.ceil(+lscache.get(LOGIN_TIME) / 1000)
  return (config.sessionDuration || 30 * 60 * 1000) / 1000 - (Math.ceil(Date.now() / 1000) - loginTime)
}

/**
 * 从缓存获取用户信息
 */
export const getUserInfoFromCache = () => {
  return JSON.parse(lscache.get(USER_INFO) || '""')
}

export const getAccessToken = () => {
  return lscache.get(TOKEN)
}

/**
 * 保存用户信息到缓存
 * @param userInfo
 */
export const setUserInfoToCache = (userInfo) => {
  lscache.set(USER_INFO, JSON.stringify(userInfo))
  lscache.set(LOGIN_TIME, Date.now())
  lscache.set(TOKEN, userInfo[TOKEN])
}
/**
 * 移除缓存中的用户信息
 */
export const removeUserInfoFromCache = () => {
  lscache.remove(USER_INFO)
  lscache.remove(LOGIN_TIME)
  lscache.remove(TOKEN)
}