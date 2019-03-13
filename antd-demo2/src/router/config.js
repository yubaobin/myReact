/**
 * 使用react-route4.x，配置字段基本和官网的一样
 * {
 *   path: '',
 *   exact: bool,
 *   strict: bool,
 *   component,
 *   redirect, // 重定向 添加此属性, component无效
 *   type, // 类型, 现在只分 404, path 无效
 *   title, 页面标题
 * }
 */
import React from 'react';
import { Router } from 'dva/router';
import dynamic from 'dva/dynamic'
import Loadable from 'react-loadable';
import BaseRouter from './BaseRouter'
import DelayLoading from '@/components/DelayLoading';
import Page404 from '@/views/404'

const Login = Loadable({ loader: () => import('@/views/Users/Login'), loading: DelayLoading });
const Home = Loadable({ loader: () => import('@/views/Home'), loading: DelayLoading });
const Child = Loadable({ loader: () => import('@/views/Dashboard/Child'), loading: DelayLoading });
const Child2 = Loadable({ loader: () => import('@/views/Dashboard/Child2'), loading: DelayLoading });

// 动态加载
const dynamicWrapper = (app, models, component) => {
 return dynamic({
    app,
    models: () => models,
    component
  });
}

const RouterConfig = ({ history, app }) => {
  const routes = [{
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/',
    name: 'home',
    component: Home,
    routes: [{
      path: '/child',
      component: BaseRouter,
      auth: true,
      routes: [{
        path: '/child/child/:id',
        component: Child
      }, {
        path: '/child/child2',
        component: Child2
      }]
    }, {
      path: '/child2',
      component: BaseRouter,
      auth: true,
      routes: [{
        path: '/child2/child/:id',
        component: Child
      }, {
        path: '/child2/child2',
        component: Child2
      }]
    }, {
      type: '404',
      component: Page404
    }]
  }]

  return (
    <Router history={history}>
      <BaseRouter routes={routes} />
    </Router>
  )
}
export default RouterConfig