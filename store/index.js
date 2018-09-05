import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import persistState from 'redux-localstorage'

import {reducer, INITIAL_STATE} from './reducer';

let middlewares = [
	applyMiddleware(thunk, logger)
]

// Only add localStorage if not on server
if(typeof localStorage !== 'undefined') {
	middlewares.push(persistState(['favorites']))
}

export const initStore = (initialState = INITIAL_STATE) => {
  return createStore(
    reducer, 
    initialState, 
    compose(...middlewares)
  )
}