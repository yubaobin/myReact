import React, {Component} from 'react';
import AdminLayout from '@/views/layout/AdminLayout'

class Home extends Component {
  getMenuList() {
    return [{
      id: 1,
      name: '菜单一',
      path: '/Child',
      children: [{
        name: '子菜单一',
        path: '/Child/Child/234',
      }, {
        name: '子菜单二',
        path: '/Child/child2'
      }]
    }, {
      id: 2,
      name: '菜单二',
      path: '/Child2',
      children: [{
        name: '子菜单一',
        path: '/Child2/Child/234',
      }, {
        name: '子菜单二',
        path: '/Child2/child2'
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