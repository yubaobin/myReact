/**
 * Created by yohouakira on 2017/6/5.
 */
import ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

const DraftAction = {
  changeDraft(text) {
    AppDispatcher.dispatch({
      type: ActionTypes.CHANGE_DRAFT,
      text,
    })
  }
}

export default DraftAction;