import React, {Component} from 'react';
import AdminLayout from '@/views/layout/AdminLayout'

class Home extends Component {
  getMenuList() {
    return [{
      id: 1,
      name: '菜单一',
      path: '/Child',
      icon: 'icon-niu',
      children: [{
        name: '子菜单一',
        path: '/Child/Child/234',
      }, {
        name: '子菜单二',
        path: '/Child/Child2'
      }]
    }, {
      id: 2,
      name: '菜单二',
      path: '/Child2',
      icon: 'icon-qiye2',
      children: [{
        name: '子菜单一',
        path: '/Child2/Child/3466666',
      }, {
        name: '子菜单二',
        path: '/Child2/Child2'
      }]
    }]
  }
  render () {
    const menuList = this.getMenuList()
    return (
      <AdminLayout menuList={menuList} {...this.props} />
    )
  }
}

export default Home