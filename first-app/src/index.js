import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Book from './Book';
import Detail from './Detail';
import Info from './Info';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const enter = () => {
  console.log('进入详情');
}
const leave = () => {
  console.log('离开详情');
}

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={App} />
    <Route path="/book" component={Book} >
      <Route onEnter={enter} onLeave={leave} path="/detail/:id" component={Detail} />
      <IndexRoute component={Info} />
    </Route>
  </Router>,
  document.getElementById('root')
);

