import Loadable from 'react-loadable';
import DelayLoading from '@/components/DelayLoading';
import Page404 from '@/views/404'

const Home = Loadable({ loader: () => import('@/views/Home'), loading: DelayLoading });
const Login = Loadable({ loader: () => import('@/views/Users/Login'), loading: DelayLoading });
const Child = Loadable({ loader: () => import('@/views/Users/Child'), loading: DelayLoading });
const Child2 = Loadable({ loader: () => import('@/views/Users/Child2'), loading: DelayLoading });

const routes = [
  { path: '/', exact: true, edirect: '/home' },
  { path: '/home', component: Home,
    routes: [
      { path: '/home/child/:id', component: Child },
      { path: '/home/child2', component: Child2 }
    ]
  },
  { path: '/login', component: Login },
  { type: '404', component: Page404 }
]

export default routes