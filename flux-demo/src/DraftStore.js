/**
 * Created by yohouakira on 2017/6/5.
 */
import { ReduceStore } from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import ActionTypes from './ActionTypes';
class DraftStore extends ReduceStore {
  constructor(){
    super(AppDispatcher);
  }
  getInitialState() {
    return '';
  }
  reduce(state, action) {
    const { type, text } = action;
    switch(type) {
      case ActionTypes.CHANGE_DRAFT:
        return text;
      default:
        return state;
    }
  }
}

export default new DraftStore();