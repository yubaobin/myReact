/**
 * Created by yohouakira on 2017/5/25.
 */

import React, { Component } from 'react';
import Button from './Button';

class ButtonController extends Component {
  constructor(props) {
    console.log("ButtonController created");
    super(props)
  }
  newItem() {
    this.props.onAddItem(this.props.draft);
  }
  changeDraft() {
    this.props.onChangeDraft(this.refs.name.value);
  }
  render() {
    return (
      <div>
        <input ref="name" onChange={this.changeDraft.bind(this)}/>
        <Button onClick={ this.newItem.bind(this) } name="添加"/>
      </div>
    )
  }
}

export default ButtonController;
