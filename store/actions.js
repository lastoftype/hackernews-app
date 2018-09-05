import * as types from './action-types'

export const add = (isServer) => dispatch => {
  return dispatch({ type: types.ADD })
}

export const setStories = (stories) => dispatch => {
	return dispatch({
		type: types.SET_STORIES,
		payload: stories
	})
}

export const addFavorite = (id) => {
	return ({
		type: types.ADD_FAVORITE,
		payload: id
	})
}

export const removeFavorite = (id) => {
	return ({
		type: types.REMOVE_FAVORITE,
		payload: id
	})
}