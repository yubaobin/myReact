/**
 * Created by yohouakira on 2017/5/25.
 */
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    console.log('Button created');
    super(props)
  }
  render() {
    return (
      <button onClick={ this.props.onClick }>{ this.props.name }</button>
    )
  }
}

export default Button;
