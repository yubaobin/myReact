/**
 * 基本布局
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'pantui';
import classnames from 'classnames'
import SlideMenu from '@/components/SlideMenu';
import BaseRouter from '@/router/BaseRouter'
import Header from './Header'
import './AdminLayout.less'

class BasicLayout extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }
  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    const { routes, ...other } = this.props;
    const { collapsed } = this.state;
    const sideClass = classnames({
      'layout-side': true,
      'layout-side-collapsed': collapsed
    })
    const bodyClass = classnames({
      'layout-body': true,
      'layout-body-collapsed': collapsed
    })
    return (
      <div className="basic-layout layout-wrapper">
        <Header />
        <div className="layout-wrapper">
          <div className={sideClass}>
            <div className="menu-control">
              <Button type="primary" size="small" onClick={this.toggleCollapsed}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button>
            </div>
            <SlideMenu { ...other } collapsed={collapsed} toggleCollapsed={this.toggleCollapsed} />
          </div>
          <div className={bodyClass}>
            <BaseRouter routes={routes} { ...other } />
          </div>
        </div>
      </div>
    )
  }
}

BasicLayout.propTypes = {
  routes: PropTypes.array
}

export default BasicLayout