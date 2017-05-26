/**
 * Created by yohouakira on 2017/5/26.
 */
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    console.log('Button created')
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
        { this.props.items.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        }) }
        </ul>
        <button onClick={this.props.onClick}>{this.props.name}</button>
      </div>
    )
  }
}

export default Button;
