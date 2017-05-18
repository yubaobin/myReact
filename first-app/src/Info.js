/**
 * Created by yohouakira on 2017/5/18.
 */
import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  constructor(props) {
    console.log('Info created');
    super(props);
  }
  render() {
    return <div>时间: {new Date().toLocaleString()}</div>
  }
}

export default Info;