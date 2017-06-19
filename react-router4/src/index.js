import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reducers from './Reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, NavLink} from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import ReactRouterView from './views/react-router-view';
import ReactRouterReduxView from './views/react-router-redux';
import promiseMiddleware from 'redux-promise';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...Reducers,
    router: routerReducer
  }),
  applyMiddleware(historyMiddleware, promiseMiddleware)
)

const Home = () => {
  return (
    <div>欢迎光临</div>
  )
}
ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <div className="container-view fix">
        <ul className="left pull-left">
          <li className="nav-item">
            <NavLink exact to="/" >首页</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ReactRouter4">React-Router4.0</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ReactRouterRedux">React-Router-Redux</NavLink>
          </li>
        </ul>
        <div className="right">
          <Route exact path="/" component={Home}/>
          <Route path="/ReactRouter4" component={ReactRouterView}/>
          <Route path="/ReactRouterRedux" component={ReactRouterReduxView}/>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

