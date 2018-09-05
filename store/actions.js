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

export const setFavoriteStories = (stories) => {
	return {
		type: types.SET_FAVORITE_STORIES,
		payload: stories
	}
}

export const addFavorite = (id) => {
	return {
		type: types.ADD_FAVORITE,
		payload: id
	}
}

export const removeFavorite = (id) => {
	return {
		type: types.REMOVE_FAVORITE,
		payload: id
	}
}

export const setLastUpdated = () => {
	return {
		type: types.SET_LAST_UPDATED
	}
}

export const setLoading = (bool) => {
	return {
		type: types.SET_LOADING,
		payload: bool
	}
}