import * as types from './action-types'

export const INITIAL_STATE = {
  stories: [],
  favorites: [],
  loading: false
}

export const reducer = (state = INITIAL_STATE, action) => {
  let favorites, index;
  switch (action.type) {
    case types.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case types.SET_STORIES: 
      return Object.assign({}, state, {
        stories: action.payload
      })
    case types.ADD_FAVORITE:
      favorites = [...state.favorites, action.payload]
      return Object.assign({}, state, {
        favorites: favorites
      })
    case types.REMOVE_FAVORITE:
      index = state.favorites.indexOf(action.payload);
      favorites = [...state.favorites]
      favorites.splice(index, 1);
      return Object.assign({}, state, {
        favorites: favorites
      })
    default: return state
  }
}