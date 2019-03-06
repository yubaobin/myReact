import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import IconFont from '@/components/IconFont';
import utils from '@/utils'
import { getMenuMatches, getDefaultCollapsedSubMenus } from './SlideMenuUtil'
import './SlideMenu.less'

const SubMenu = Menu.SubMenu;

const getIcon = icon => {
  if (typeof icon === 'string') {
    if (utils.isUrl(icon)) {
      return <Icon component={() => <img src={icon} alt="icon" className='icon' />} />;
    }
    if (icon.startsWith('icon-')) {
      return <IconFont type={icon} />;
    }
    return <Icon type={icon} />;
  }
  return icon;
};

class SlideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openKeys: getDefaultCollapsedSubMenus(props)
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOpenChange = this.handleOpenChange.bind(this);
  }

  handleClick(item) {
    this.props.clickItem && this.props.clickItem(item)
  }

  handleOpenChange(openKeys) {
    const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
    this.setState({
      openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys],
    });
  }

  isMainMenu = key => {
    const { menuList } = this.props;
    return menuList.some(item => {
      if (key) {
        return item.key === key || item.path === key;
      }
      return false;
    });
  }
  /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */
  getNavMenuItems = (menusData) => {
    if (!menusData) {
      return [];
    }
    return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map(item => this.getSubMenuOrItem(item))
    .filter(item => item);
  }

  getSubMenuOrItem = item => {
    if (item.children && item.children.length) {
      const { name } = item;
      return (
        <SubMenu
          title={
            item.icon ? ( <span>{getIcon(item.icon)}<span>{name}</span></span> )
              : ( name )
          }
          key={item.path} >
          {this.getNavMenuItems(item.children)}
        </SubMenu>
      );
    }
    return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
  }
  /**
   * 判断是否是http链接.返回 Link 或 a
   */
  getMenuItemPath(item) {
    const { name } = item;
    const itemPath = this.conversionPath(item.path);
    const itemIcon = getIcon(item.icon);
    const { target } = item;
    if (/^https|http?:\/\//.test(itemPath)) {
      return (
        <a href={itemPath} target={target}>
          {itemIcon}
          <span>{name}</span>
        </a>
      );
    }
    const { location } = this.props;
    return (
      <Link
        to={itemPath}
        replace={itemPath === location.pathname}>
        {itemIcon}
        <span>{name}</span>
      </Link>
    )
  }
  conversionPath = path => {
    if (path && path.indexOf('http') === 0) {
      return path;
    }
    return `/${path || ''}`.replace(/\/+/g, '/');
  }

  getSelectedMenuKeys = pathname => {
    const { flatMenuKeys } = this.props;
    return utils.urlToList(pathname).map(itemPath => getMenuMatches(flatMenuKeys, itemPath).pop());
  }

  render() {
    const { menuList, location, collapsed } = this.props
    const { openKeys } = this.state
    const pathname = location.pathname
    let selectedKeys = this.getSelectedMenuKeys(pathname);
    if (!selectedKeys.length && openKeys) {
      selectedKeys = [openKeys[openKeys.length - 1]];
    }
    let props = {};
    if (openKeys && !collapsed) {
      props = {
        openKeys: openKeys.length === 0 ? [...selectedKeys] : openKeys,
      };
    }
    return (
      <Fragment>
        <Menu
          mode="inline"
          className="slide-menu"
          inlineCollapsed={collapsed}
          onClick={this.handleClick}
          selectedKeys={selectedKeys}
          onOpenChange={this.handleOpenChange}
          {...props}>
          {this.getNavMenuItems(menuList)}
        </Menu>
      </Fragment>
    )
  }
}

SlideMenu.propTypes = {
  menuList: PropTypes.array,
  clickItem: PropTypes.func
}

export default SlideMenu