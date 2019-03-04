import React, {Component} from 'react';
import { NavLink, Switch } from 'react-router-dom'
import AuthRouter from '@/components/AuthRouter'
class Home extends Component {
  render () {
    const { routes } = this.props
    return (
      <div>
        <p>home</p>
        <ul>
          <li><NavLink to="/home/child/123">child</NavLink></li>
          <li><NavLink to="/home/child2">child2</NavLink></li>
        </ul>
        <Switch>
          { routes.map((route, index) => <AuthRouter key={index} {...route} ></AuthRouter>) }
        </Switch>
      </div>
    )
  }
}

export default Home