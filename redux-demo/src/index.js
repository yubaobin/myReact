import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Counter from './Counter';
import Reducer from './Reducer';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const store = createStore(Reducer, applyMiddleware(logger));

const render = () => ReactDOM.render(
  <Counter
    value = {store.getState()}
    add={() => store.dispatch({type:'ADD'})}
    min={() => store.dispatch({type:'MIN'})}/>,
  document.getElementById('root'));
render();
store.subscribe(render);
registerServiceWorker();
