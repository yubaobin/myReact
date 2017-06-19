/**
 * Created by yohouakira on 2017/6/19.
 */

import ActionTypes from './ActionTypes';

export const addBook = (book) => {
  return new Promise((resolve) => {
    resolve({
      type: ActionTypes.ADD_BOOK,
      book
    });
  })
}

export const deleteB = (id) => {
  return {
    type: ActionTypes.DELETE_BOOK,
    id
  }
}
