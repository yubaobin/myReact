import React, {Component} from 'react';
import { Switch } from 'react-router-dom';
import SubRoutes from '@/routers'
import Nav from '@/views/Users/Nav'
class Register extends Component {
  render () {
    const { routes } = this.props
    return (
      <div>
        <p>注册</p>
        <Nav />
        <Switch>
          {routes.map((route, index) => <SubRoutes key={index} {...route} />)}
        </Switch>
      </div>
    )
  }
}

export default Register