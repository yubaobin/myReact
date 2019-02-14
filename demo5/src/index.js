import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'styles/index.scss';
import App from 'views/index';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
