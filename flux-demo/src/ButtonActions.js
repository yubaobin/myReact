/**
 * Created by yohouakira on 2017/5/25.
 */

import ButtonActionTypes from './ButtonActionTypes';
import Dispatcher from './AppDispatcher';
const Action = {
  addItem(text) {
    Dispatcher.dispatch({
      type: ButtonActionTypes.NEW_ITEM,
      text,
    })
  },
  deleteItem(id) {
    Dispatcher.dispatch({
      type: ButtonActionTypes.DELETE_ITEM,
      id,
    })
  }
}

export default Action;

