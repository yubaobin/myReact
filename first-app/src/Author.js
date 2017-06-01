/**
 * Created by yohouakira on 2017/5/18.
 */

import React, { Component } from 'react';
import Name from './Name'
class Author extends Component {
  constructor(props) {
    console.log('author created');
    super(props)
    this.state = {
      value: 1,
    }
  }
  add() {
    this.setState({value: this.state.value + 1});
  }
  render() {
    return <div>
             <h5>{ this.props.name || this.props.defaultName } </h5>
             <h5>name组件: <Name value={this.state.value} /></h5>
             <button onClick={this.add.bind(this)}>点击</button>
           </div>
  }
}
Author.defaultProps = {
  defaultName: '未命名'
}
export default Author;
