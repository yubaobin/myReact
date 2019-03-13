import 'react-app-polyfill/ie9';
import '@/styles/global.less';
import * as serviceWorker from './serviceWorker';

import { createBrowserHistory } from 'history'
import router from './router/config'
import dva from 'dva';
import createLoading from 'dva-loading';

// models
import global from '@/models/global'
import user from '@/models/user'
import login from '@/models/login'

const app = dva({
  history: createBrowserHistory()
});

app.use(createLoading());

app.router(router);

app.model(global);
app.model(user);
app.model(login);

app.start('#App');

serviceWorker.unregister();
