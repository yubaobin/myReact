/**
 * 基本布局
 */
import React, {Component} from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthRouter from '@/components/AuthRouter';
import SlideMenu from '@/components/SlideMenu';
import Header from './Header'
import './AdminLayout.less'

class BasicLayout extends Component {
  render() {
    const { routes, ...other } = this.props
    return (
      <div className="basic-layout layout-wrapper">
        <Header />
        <div className="layout-wrapper">
          <div className="layout-side">
            <SlideMenu { ...other } />
          </div>
          <div className="layout-body">
            <Switch>
              {routes.map((route, index) => <AuthRouter key={index} {...route} {...other} />)}
            </Switch>
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