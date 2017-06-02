/**
 * Created by yohouakira on 2017/6/2.
 */
import React, { Component } from 'react';
class Counter extends Component {
  render() {
    const { value, handleClick } = this.props;
    return (
      <div>
        <p>{value}</p>
        <button onClick={handleClick}>+</button>
      </div>
    )
  }
}
export default Counter;
