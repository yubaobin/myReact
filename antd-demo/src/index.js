import 'react-app-polyfill/ie9';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@/styles/common.less';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from '@/routers'
import SubRoutes from '@/components/SubRoutes'
import store from '@/store'

class App extends Component {
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

ReactDOM.render(<App />, document.getElementById('App'));

serviceWorker.unregister();
