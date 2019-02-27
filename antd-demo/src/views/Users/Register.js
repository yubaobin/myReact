import React, {Component} from 'react';
import { NavLink, Switch } from 'react-router-dom';
import SubRoutes from '@/routers'

class Register extends Component {
  render () {
    const { routes, match } = this.props
    console.log(match)
    return (
      <div>
        <p>注册</p>
        <NavLink to="/child">Child1</NavLink>
        <NavLink to="/child2">Child2</NavLink>
        <Switch>
          {routes.map((route, index) => <SubRoutes key={index} {...route} />)}
        </Switch>
      </div>
    )
  }
}

export default Register