import { parse } from 'qs';
/**
 * 空对象判断
 * @param obj
 * @returns {boolean}
 */
export const isEmpty = (obj) => {
  for (var key in obj) return false
  return true
}

export const isUrl = (path) => {
  /* eslint no-useless-escape:0 */
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}

export const urlToList = (url) => {
  const urllist = url.split('/').filter(i => i);
  return urllist.map((urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`);
}

/**
 * 参数对象转换成请求参数字符串
 * @param params
 * @returns {*}
 */
export const params2query = (params) => {
  if (typeof params !== 'object') return ''
  var queries = []
  for (var i in params) {
    if (params.hasOwnProperty(i)) {
      params[i] && queries.push(i + '=' + params[i])
    }
  }
  return queries.join('&')
}
/**
 * 根据页面地址获取参数
 */
export const getPageQuery = () => {
  return parse(window.location.href.split('?')[1]);
}

/**
 * 把?后面的转成参数
 * @param query
 * @returns {{}}
 */
export const query2params = (query) => {
  if (typeof query !== 'string') return {}
  let param = {};
  let params = query.split('&');
  for (let i = 0, len = params.length; i < len; i++) {
    if (!params[i]) continue;
    const kv = params[i].split('=');
    if (kv[0] && kv[1]) param[kv[0]] = kv[1];
  }
  return param
}
/**
 *  uuid
 */
export const uuid = () => {
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
