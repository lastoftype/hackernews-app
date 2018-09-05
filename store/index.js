import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {reducer, INITIAL_STATE} from './reducer';

export const initStore = (initialState = INITIAL_STATE) => {
  return createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk, logger)))
}