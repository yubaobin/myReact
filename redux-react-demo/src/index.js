import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import CounterView from './Counter';
import BookListView from './BookList';
import Reducer from './Reducer';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const store = createStore(
  Reducer,
  applyMiddleware(thunk, promise)
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CounterView />
      <BookListView />
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
