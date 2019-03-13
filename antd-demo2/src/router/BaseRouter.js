/**
 *  用于子路由的简单布局
 */
import React, {Component} from 'react';
import { Switch } from 'react-router-dom';
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