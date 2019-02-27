import React, {Component} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'
import routes from '@/routers/config'
import SubRoutes from '@/routers'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter className="container">
        <Switch>
          {routes.map((route, index) => <SubRoutes key={index} {...route} />)}
        </Switch>
      </BrowserRouter>
    )
  }
}