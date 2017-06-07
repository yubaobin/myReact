/**
 * Created by yohouakira on 2017/5/25.
 */

import ActionTypes from './ActionTypes';
import Dispatcher from './AppDispatcher';
const Action = {
  addItem(text) {
    Dispatcher.dispatch({
      type: ActionTypes.NEW_ITEM,
      text,
    })
  },
  deleteItem(id) {
    Dispatcher.dispatch({
      type: ActionTypes.DELETE_ITEM,
      id,
    })
  }
}

export default Action;

