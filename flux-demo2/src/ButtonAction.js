/**
 * Created by yohouakira on 2017/5/26.
 */
import AppDispatcher from './AppDispatcher';

const ButtonAction = {
  addItem(text) {
    AppDispatcher.dispatch({
      type: 'ADD_ITEM',
      text,
    })
  }
}

export default ButtonAction;
