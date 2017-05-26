/**
 * Created by yohouakira on 2017/5/26.
 */

import React, { Component } from 'react';
import Button from './Button';
import ButtonAction from './ButtonAction';
import ButtonStore from './ButtonStore';
class ButtonController extends Component {
  constructor(props) {
    console.log('ButtonController created');
    super(props);
    this.state = {
      items: ButtonStore.getAll(),
    }
  }
  componentDidMount() {
    ButtonStore.addChangeListener(this._onChange.bind(this));
  }
  componentWillUnmount() {
    ButtonStore.removeChangeListener(this._onChange.bind(this))
  }
  _onChange() {
    this.setState({
      items: ButtonStore.getAll(),
    })
  }
  addItem() {
    ButtonAction.addItem(1);
  }
  render() {
    return (
      <Button onClick={this.addItem.bind(this)} items={this.state.items} name="添加"/>
    )
  }
}

export default ButtonController;


