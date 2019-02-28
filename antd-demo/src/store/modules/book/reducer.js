import { SET_BOOK, GET_BOOK } from './action-type'

/**
 * 初始化state
 */
const initState = {
  book: {
    name: '初始化book'
  }
};

/**
 * reducer
 */
export default (state = initState, action) => {
  switch (action.type) {
    case SET_BOOK:
      const result = Object.assign({}, state, { book: { name: action.name }});
      return result
    case GET_BOOK:
      return state;
    default:
      return state;
  }
}