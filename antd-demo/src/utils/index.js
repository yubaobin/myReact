import lscache from 'lscache'
import config from '@/config'

export default (() => {
  const TOKEN = config.accessToken || 'token'
  const LOGIN_TIME = 'UserLoginTime'
  const USER_INFO = 'UserInfo'
  return {
    /**
     * 空对象判断
     * @param obj
     * @returns {boolean}
     */
    isEmpty (obj) {
      for (var key in obj) return false
      return true
    },
    isUrl(path) {
      /* eslint no-useless-escape:0 */
      const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
      return reg.test(path);
    },
    urlToList(url) {
      const urllist = url.split('/').filter(i => i);
      return urllist.map((urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`);
    },
    /**
     * 获取登录剩余时间秒数
     * @returns {number}
     */
    getLoginRemainingTime () {
      const loginTime = Math.ceil(+lscache.get(LOGIN_TIME) / 1000)
      return (config.sessionDuration || 30 * 60 * 1000) / 1000 - (Math.ceil(Date.now() / 1000) - loginTime)
    },
    /**
     * 从缓存获取用户信息
     */
    getUserInfoFromCache () {
      return JSON.parse(lscache.get(USER_INFO) || '""')
    },
    getAccessToken () {
      return lscache.get(TOKEN)
    },
    /**
     * 保存用户信息到缓存
     * @param userInfo
     */
    setUserInfoToCache (userInfo) {
      lscache.set(USER_INFO, JSON.stringify(userInfo))
      lscache.set(LOGIN_TIME, Date.now())
      lscache.set(TOKEN, userInfo[TOKEN])
    },
    /**
     * 移除缓存中的用户信息
     */
    removeUserInfoFromCache () {
      lscache.remove(USER_INFO)
      lscache.remove(LOGIN_TIME)
      lscache.remove(TOKEN)
    },
    /**
     * 参数对象转换成请求参数字符串
     * @param params
     * @returns {*}
     */
    params2query (params) {
      if (typeof params !== 'object') return ''
      var queries = []
      for (var i in params) {
        if (params.hasOwnProperty(i)) {
          params[i] && queries.push(i + '=' + params[i])
        }
      }
      return queries.join('&')
    },
    query2params (query) {
      if (typeof query !== 'string') return {}
      let param = {};
      let params = query.split('&');
      for (let i = 0, len = params.length; i < len; i++) {
        if (!params[i]) continue;
        const kv = params[i].split('=');
        if (kv[0] && kv[1]) param[kv[0]] = kv[1];
      }
      return param
    },
    /**
     *  uuid
     */
    uuid () {
      let s = []
      const hexDigits = '0123456789abcdef'
      for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
      }
      s[14] = '4'
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
      s[8] = s[13] = s[18] = s[23] = '-'
      return s.join('')
    }
  }
})()
