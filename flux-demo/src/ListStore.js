/**
 * Created by yohouakira on 2017/5/25.
 */
import { ReduceStore }  from 'flux/utils';
import ActionTypes from './ActionTypes';
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
      case ActionTypes.NEW_ITEM:
        return [...state, action.text];
      case ActionTypes.DELETE_ITEM:
        state.splice(action.id, 1);
        return [...state];
      default:
        return state;
    }
  }
}

export default new ButtonStore();
