/**
 * Created by yohouakira on 2017/5/25.
 */
import { ReduceStore }  from 'flux/utils';
import ButtonActionTypes from './ButtonActionTypes';
import AppDispatcher from './AppDispatcher';
class ButtonStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }
  getInitialState() {
    return [];
  }
  reduce(state, action) {
    switch (action.type) {
      case ButtonActionTypes.NEW_ITEM:
        return [...state, action.text];
      case ButtonActionTypes.DELETE_ITEM:
        state.splice(action.id, 1);
        return [...state];
      default:
        return state;
    }
  }
}

export default new ButtonStore();
