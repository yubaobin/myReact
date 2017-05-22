/**
 * Created by yohouakira on 2017/5/18.
 */

import React, { Component } from 'react';
import Name from './Name'
class Author extends Component {
  constructor(props) {
    console.log('author created');
    super(props)
  }
  render() {
    return <div>
             <h5>{ this.props.name || this.props.defaultName } </h5>
             <h5>name组件: <Name /></h5>
           </div>
  }
}
Author.defaultProps = {
  defaultName: '未命名'
}
export default Author;
