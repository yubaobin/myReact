import React, {Component} from 'react';
import AdminLayout from '@/views/layout/AdminLayout'
import { connect } from 'dva';

const menus = [{
  id: 1,
  name: '菜单一',
  path: '/Child',
  icon: 'icon-niu',
  children: [{
    name: '子菜单一',
    path: '/child/child/234',
  }, {
    name: '子菜单二',
    path: '/child/child2'
  }]
}, {
  id: 2,
  name: '菜单二',
  path: '/Child2',
  icon: 'icon-qiye2',
  children: [{
    name: '子菜单一',
    path: '/child2/child/3466666',
  }, {
    name: '子菜单二',
    path: '/child2/child2'
  }]
}]

@connect(
  state => ({ name: state.app.appname })
)
class Home extends Component {
  getMenuList() {
    return menus
  }
  render () {
    const menuList = this.getMenuList()
    return (
      <AdminLayout menuList={menuList} {...this.props} />
    )
  }
}

export default Home