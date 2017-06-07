import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonController from './ButtonController';

class App extends Component {
  constructor(props) {
    console.log('App created');
    super(props)
  }
  deleteItem(index) {
    this.props.onDeleteItem(index);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>输入些东西</h1>
        <ButtonController {...this.props}/>
        <div id="list">
        { this.props.list.map((item, index) => {
          return <div className="item" key={index}>{ item }<span onClick={this.deleteItem.bind(this, index)} className="delete"></span></div>
        })}
        </div>
      </div>
    );
  }
}

export default App;
