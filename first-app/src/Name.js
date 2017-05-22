/**
 * Created by yohouakira on 2017/5/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Name extends Component {
  constructor(props) {
    console.log('name created');
    super(props)
  }
  componentDidMount() {
  }
  render() {
    return <span style={{color: this.context.color}}>{ this.props.name  || this.props.defaultName }</span>
  }
}

Name.contextTypes = {
  color: PropTypes.string
}

Name.defaultProps = {
  defaultName: '未命名'
}
export default Name;
