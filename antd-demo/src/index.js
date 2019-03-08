import 'react-app-polyfill/ie9';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@/styles/global.less';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import routes from '@/routers/config'
import BaseRouter from '@/routers/BaseRouter'
import store, { history } from '@/store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BaseRouter routes={routes} />
        </ConnectedRouter>
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
  module.hot.accept(App, () => {
    ReactDOM.render(<App />, document.getElementById('App'));
  })
}
