import React, {Component} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'
import routes from '@/routers/config'
import SubRoutes from '@/routers'
import { Provider } from 'react-redux'
import store from '@/store'
export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter className="container">
          <Switch>
            {routes.map((route, index) => <SubRoutes key={index} {...route} ></SubRoutes>)}
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}