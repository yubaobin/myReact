/**
 * Created by yohouakira on 2017/5/25.
 */
import App from './App';
import React, { Component } from 'react';
import {Container} from 'flux/utils';
import ListStore from './ListStore';
import ListActions from './ListActions';
import DraftStore from './DraftStore';
import DraftAction from './DraftAction';

class AppContainer extends Component {
  static getStores() {
    return [ListStore, DraftStore];
  }
  static calculateState() {
    return {
      list: ListStore.getState(),
      draft: DraftStore.getState(),
      onAddItem: ListActions.addItem,
      onDeleteItem: ListActions.deleteItem,
      onChangeDraft: DraftAction.changeDraft,
    }
  }
  render() {
    return (
      <App { ...this.state }/>
    )
  }
}
export default Container.create(AppContainer);
