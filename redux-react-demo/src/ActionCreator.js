/**
 * Created by yohouakira on 2017/6/7.
 */
import ActionTypes from './ActionTypes';

export const addBook = (book) => {
  return {
    type: ActionTypes.ADD_BOOK,
    book
  }
}

export const deleteBook = (id) => {
  return {
    type: ActionTypes.DELETE_BOOK,
    id
  }
}

export const saveDraft = (newDraft) => {
  return {
    type: ActionTypes.SAVE_DRAFT,
    newDraft
  }
}

const list = ['异步加载1', '异步加载2', '异步加载3', '异步加载4']
export const asyncLoad = () => (dispatch, getState) => {
  dispatch({ type: ActionTypes.POST_DATA });
  return setTimeout(() => {
    dispatch({ type: ActionTypes.GET_DATA, data: list })
  }, 2000)
}