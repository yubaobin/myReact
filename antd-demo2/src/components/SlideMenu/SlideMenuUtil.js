import pathToRegexp from 'path-to-regexp';
import { urlToList } from '@/utils/utils'

/**
 *
 * @param flatMenuKeys
 * @param path
 */
export const getMenuMatches = (flatMenuKeys, path) => {
  return flatMenuKeys.filter(item => {
    if (item) {
      return pathToRegexp(item).test(path);
    }
    return false;
  });
}
/**
 * 获取菜单的key值，包括子节点
 * @param menuData
 * @returns {Array}
 */
export const getFlatMenuKeys = menuList => {
  let keys = [];
  menuList.forEach(item => {
    keys.push(item.path);
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });
  return keys;
};

/**
 * 获得菜单子节点
 * @memberof SiderMenu
 */
export const getDefaultCollapsedSubMenus = props => {
  const {
    location: { pathname },
    flatMenuKeys,
  } = props;
  return urlToList(pathname)
    .map(item => getMenuMatches(flatMenuKeys, item)[0])
    .filter(item => item)
    .reduce((acc, curr) => [...acc, curr], ['/']);
};