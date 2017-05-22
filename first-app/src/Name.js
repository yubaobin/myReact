/**
 * Created by yohouakira on 2017/5/18.
 */
import React, { Component } from 'react';
class Name extends Component {
  constructor(props) {
    console.log('name created');
    super(props)
  }
  componentDidMount() {
    console.log(this.context.color);
  }
  render() {
    return <span>{ this.props.name || this.context.color || this.props.defaultName }</span>
  }
}
Name.defaultType = {
  defaultName: '没有姓名'
}
export default Name;