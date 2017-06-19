/**
 * Created by yohouakira on 2017/6/12.
 */
import React, { Component } from 'react';
import './react-router-view.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

const first = () => {
  return (
    <div>普通tab页</div>
  )
}

const second = ({ history, match }) => {
  return (
    <div>
      <div>location参数:</div>
      { JSON.stringify(history.location) }
      <div>路径的动态参数:</div>
      { JSON.stringify(match.params) }
    </div>
  )
}
const third = () => {
  return (
    <div>
      <div>在switch里面的路由，只会匹配一个</div>
      <div>匹配成功后，就不会再继续匹配</div>
    </div>

  )
}
class Index extends Component {
  render() {
    return (
      <div>
        添加exact，只匹配path对应的路由
      </div>
    )
  }
}

class ReactRouterView extends Component {
  beforeEnter() {
    console.log('进入之前');
  }
  render() {
    console.log('store', this.context.store);
    return (
      <BrowserRouter
        basename='/ReactRouter4'
        getUserConfirmation={this.beforeEnter()}>
        <div className="my-router-view">
          <div className="top-nav">
            <NavLink exact className='nav-item' to='/'>首页(只匹配'/')</NavLink>
            <NavLink className='nav-item' to='/first'>普通tab页</NavLink>
            <NavLink className='nav-item' to={{pathname:'/second/1'}}>带参数tab页</NavLink>
            <NavLink className='nav-item' to={{pathname:'/third'}}>使用switch的tab页</NavLink>
          </div>
          <Route exact path="/" component={Index}/>
          <Route path="/first" component={first}/>
          <Route path="/second/:id" component={second}/>
          <switch>
            <Route path="/third/error" render={() => <div>error</div>}/>
            <Route path="/third" component={third}/>
          </switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default ReactRouterView;