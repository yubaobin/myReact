/**
 * Created by yohouakira on 2017/6/1.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired,
    min: PropTypes.func.isRequired,
  }
  constructor(props) {
    console.log('Counter created');
    super(props);
  }
  componentWillUpdate() {
    console.log('update');
  }
  render() {
    const { value, add, min } = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={add}>+</button>
        <button onClick={min}>-</button>
      </div>
    )
  }
}

export default Counter;
