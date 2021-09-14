/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import rocketsReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const reducer = combineReducers({
  rocketsReducer,
  missionReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
