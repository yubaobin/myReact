import Loadable from 'react-loadable'
import DelayLoading from '@/components/DelayLoading'

const Home = Loadable({ loader: () => import('@/views/Home'), loading: DelayLoading })
const Login = Loadable({ loader: () => import('@/views/Users/Login'), loading: DelayLoading })
const Register = Loadable({ loader: () => import('@/views/Users/Register'), loading: DelayLoading })
const Child = Loadable({ loader: () => import('@/views/Users/Child'), loading: DelayLoading })
const Child2 = Loadable({ loader: () => import('@/views/Users/Child2'), loading: DelayLoading })

const routes = [{
  path: '/',
  exact: true,
  component: Home
}, {
  path: '/login',
  component: Login
}, {
  path: '/register',
  component: Register,
  routes: [{
    path: '/register/child',
    component: Child
  }, {
    path: '/register/child2',
    component: Child2
  }]
}]

export default routes