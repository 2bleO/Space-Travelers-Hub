/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(logger),
);
