import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Reducer from './Reducer';
import { createStore } from 'redux';

const store = createStore(Reducer);

class App extends Component {
  componentWillMount() {
    store.subscribe(this.render);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter value = {store.getState()}
                 add={() => store.dispatch({type:'ADD'})}
                 min={() => store.dispatch({type:'MIN'})}/>
      </div>
    );
  }
}

export default App;
