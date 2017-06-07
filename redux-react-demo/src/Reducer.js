/**
 * Created by yohouakira on 2017/6/2.
 */
import ActionTypes from './ActionTypes';
import { combineReducers } from 'redux';

const initDate = {
  loading: false,
  bookList: [],
}
const loader = (loadData = initDate, action) => {
  switch (action.type) {
    case ActionTypes.POST_DATA:
      return Object.assign({}, loadData, { loading: true });
    case ActionTypes.GET_DATA:
      return Object.assign({}, loadData, { loading: false, bookList: action.data });
    case ActionTypes.ADD_BOOK:
      return Object.assign({}, loadData, { bookList: [...loadData.bookList, action.book] });
    case ActionTypes.DELETE_BOOK:
      loadData.bookList.splice(action.id, 1);
      return Object.assign({}, loadData, { bookList: [...loadData.bookList] });
    default:
      return loadData;
  }
}
const draft = (draft = '', action) => {
  const { type, newDraft } = action;
  switch (type) {
    case ActionTypes.SAVE_DRAFT:
      return newDraft ? newDraft: '';
    default:
      return draft;
  }
}

const Reducer = combineReducers({
  loader,
  draft,
})

export default Reducer;
