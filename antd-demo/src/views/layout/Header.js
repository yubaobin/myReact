/**
 *  头部内容
 */
import React, {Component} from 'react';
import { Menu, Badge } from 'antd';
import IconFont from '@/components/IconFont';
import logo from '@/assets/logo.png';
import avatar from '@/assets/usertx.jpg'
import './Header.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  render() {
    return (
      <div className="layout-header">
        <div className="layout-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="layout-header-right">
          <Menu mode="horizontal">
            <Menu.Item key="item1"><IconFont className="single-icon" type="icon-smile" /></Menu.Item>
            <SubMenu key="item2" title={<span className="submenu-title-wrapper"><IconFont type="icon-shezhi" />Submenu</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="item3">
              <Badge count={5}>
                <IconFont type="icon-tixing"/>
              </Badge>
            </Menu.Item>
            <SubMenu key="item4" title={<div className="header-wrapper"><img className="layout-header-avatar" src={avatar} alt="头像" />user</div>}>
              <Menu.Item key="setting:5">个人中心</Menu.Item>
              <Menu.Item key="setting:6">个人设置</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    )
  }
}

export default Header