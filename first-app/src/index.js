import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Book from './Book';
import Detail from './Detail';
import Info from './Info';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={App} />
    <Route path="/book" component={Book} >
      <Route path="/detail/:id" component={Detail} />
      <IndexRoute component={Info} />
    </Route>
  </Router>,
  document.getElementById('root')
);
