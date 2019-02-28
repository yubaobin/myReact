import { SET_BOOK, GET_BOOK } from './action-type'

export const getBook = () => {
  return {
    type: GET_BOOK
  }
}

export const setBook = ({ name }) => {
  return {
    type: SET_BOOK,
    name: name
  }
}