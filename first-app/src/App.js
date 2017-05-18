import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
    }
  }
  moveUp(){
    console.log(this.state.top);
    this.setState({top: this.state.top - 1});
  }
  moveDown(){
    this.setState({top: this.state.top + 1});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style={{top: this.state.top + 'px'}}>Welcome to React {this.state.top}</h2>
        </div>
        <button onClick={this.moveUp.bind(this)}>⬆</button>
        <button onClick={this.moveDown.bind(this)}>⬇</button>
      </div>
    );
  }
}

export default App;
