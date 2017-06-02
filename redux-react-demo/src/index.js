import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { connect, Provider } from 'react-redux';
import Counter from './Counter';
import Reducer from './Reducer';
import { createStore } from 'redux';
const mapStateToProps = (state) => {
  return {
    value: state.count,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch({ type: 'ADD'}),
  }
}

//生成容器组件
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
