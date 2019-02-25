import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/common.less';
import App from '@/views/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('App'));

serviceWorker.unregister();
