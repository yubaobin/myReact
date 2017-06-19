/**
 * Created by yohouakira on 2017/6/9.
 */

import ActionTypes from './ActionTypes';

const books = [
  'java从入门到放弃',
  'C++从入门到自杀',
  'javascript从入门到自杀',
  'Linux从入门到自杀',
  'php从入门到精通',
]
const bookList = (book = books, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.ADD_BOOK:
      return [...book, action.book];
    case ActionTypes.DELETE_BOOK:
      book.splice(action.id,1);
      return [...book];
    default:
      return book;
  }
}
export default {
  bookList
};