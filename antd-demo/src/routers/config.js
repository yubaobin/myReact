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
import Loadable from 'react-loadable';
import BaseRouter from './BaseRouter'
import DelayLoading from '@/components/DelayLoading';
import Page404 from '@/views/404'

const Login = Loadable({ loader: () => import('@/views/Users/Login'), loading: DelayLoading });
const Home = Loadable({ loader: () => import('@/views/Home'), loading: DelayLoading });
const Child = Loadable({ loader: () => import('@/views/Dashboard/Child'), loading: DelayLoading });
const Child2 = Loadable({ loader: () => import('@/views/Dashboard/Child2'), loading: DelayLoading });

const routes = [{
  path: '/user',
  component: BaseRouter,
  routes: [{
    path: '/user/login',
    component: Login
  }]
}, {
  path: '/',
  component: Home,
  routes: [{
    path: '/Child',
    auth: true,
    component: BaseRouter,
    routes: [{
      path: '/Child/Child/:id',
      component: Child
    }, {
      path: '/Child/Child2',
      component: Child2
    }]
  }, {
    path: '/Child2',
    auth: true,
    component: BaseRouter,
    routes: [{
      path: '/Child2/Child/:id',
      component: Child
    }, {
      path: '/Child2/Child2',
      component: Child2
    }]
  }, {
    type: '404',
    component: Page404
  }]
}]

export default routes