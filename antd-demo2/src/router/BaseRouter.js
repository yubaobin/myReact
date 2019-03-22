/**
 *  用于子路由的简单布局
 */
import React, {Component} from 'react';
import { Switch } from 'dva/router';
import AuthRouter from './AuthRouter';

class NormalLayout extends Component {
  render() {
    const { routes, ...other } = this.props
      return (
        <Switch>
          {
            routes.map((route, index) =>
              <AuthRouter key={index} {...route} { ...other } />
            )
          }
        </Switch>
      )
  }
}

export default NormalLayout