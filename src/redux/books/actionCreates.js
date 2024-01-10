import * as a from './actionType'

export const AddBook = (newBook) => {
    return {
        type: a.ADD_BOOK,
        payload: newBook
    }
}


export const DeleteBook = (id) => {
   return {
     type: a.DELETE_BOOK,
     payload: id,
   };
}

export const ToggleFavorite = (id) => {
  return {
    type: a.TOGGLE_FAVORITE,
    payload: id
  }
}