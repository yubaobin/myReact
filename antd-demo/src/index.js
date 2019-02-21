import 'console-polyfill';
import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/common.less';
import 'nprogress/nprogress.css'
import App from '@/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
