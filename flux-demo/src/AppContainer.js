/**
 * Created by yohouakira on 2017/5/25.
 */
import App from './App';
import React, { Component } from 'react';
import {Container} from 'flux/utils';
import ButtonStore from './ButtonStore';
import ButtonActions from './ButtonActions';

class AppContainer extends Component {
  static getStores() {
    return [ButtonStore];
  }
  static calculateState() {
    return {
      list: ButtonStore.getState(),
      onAddItem: ButtonActions.addItem,
      onDeleteItem: ButtonActions.deleteItem,
    }
  }
  render() {
    return (
      <App { ...this.state }/>
    )
  }
}
export default Container.create(AppContainer);
