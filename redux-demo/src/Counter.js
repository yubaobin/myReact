/**
 * Created by yohouakira on 2017/6/1.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Counter extends Component {
  static propTypes = {
    store: PropTypes.object,
  }
  constructor(props) {
    console.log('Counter created');
    super(props);
  }
  componentWillUpdate() {
    console.log('update');
  }

  render() {
    return (
      <div>
        <h1>{this.props.store.getState()}</h1>
        <button onClick={() => {this.props.store.dispatch({ type: 'ADD' })}}>+</button>
        <button onClick={() => {this.props.store.dispatch({ type: 'MIN' })}}>-</button>
      </div>
    )
  }
}

export default Counter;
