import 'react-app-polyfill/ie9';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@/styles/global.less';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from '@/routers'
import AuthRouter from '@/components/AuthRouter'
import store from '@/store'


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter className="container">
          <Switch>
            {routes.map((route, index) => <AuthRouter key={index} {...route} ></AuthRouter>)}
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));

serviceWorker.unregister();

if (module.hot) {
  module.hot.accept('./store/reducers', () => {
    const nextCombineReducers = require('./store/reducers').default;
    store.replaceReducer(nextCombineReducers);
  });
}
