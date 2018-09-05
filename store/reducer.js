import * as types from './action-types'

export const INITIAL_STATE = {
  stories: [],
  favorites: [],
  favoriteStories: [],
  loading: false,
  lastUpdated: Date.now()
}

export const reducer = (state = INITIAL_STATE, action) => {
  let favorites, index
  switch (action.type) {
    case types.SET_LOADING:
      return Object.assign({}, state, {
        loading: action.payload
      })
    case types.SET_STORIES:
      return Object.assign({}, state, {
        stories: action.payload
      })
    case types.SET_FAVORITE_STORIES:
      return Object.assign({}, state, {
        favoriteStories: action.payload
      })
    case types.ADD_FAVORITE:
      favorites = [...state.favorites, action.payload]
      return Object.assign({}, state, {
        favorites: favorites
      })
    case types.REMOVE_FAVORITE:
      index = state.favorites.indexOf(action.payload)
      favorites = [...state.favorites]
      favorites.splice(index, 1)
      return Object.assign({}, state, {
        favorites: favorites
      })
    case types.SET_LAST_UPDATED:
      return Object.assign({}, state, {
        lastUpdated: Date.now()
      })
    default:
      return state
  }
}
