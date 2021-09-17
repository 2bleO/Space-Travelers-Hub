/* eslint-disable import/prefer-default-export */
const SET_ROCKETS = 'bookStore/books/GET_ROCKETS';
const RESERVE_ROCKET = 'bookStore/books/RESERVE_ROCKET';
const REMOVE_ROCKET = 'bookStore/books/REMOVE_ROCKET';

const initialState = [];

export const updateState = (payload) => ({
  type: SET_ROCKETS,
  payload,
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const removeRocket = (id) => ({
  type: REMOVE_ROCKET,
  payload: id,
});

const rocketsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      newState = state;
      newState[action.payload].reserved = true;
      return newState;
    case REMOVE_ROCKET:
      newState = state;
      newState[action.payload].reserved = false;
      return newState;
    default:
      return state;
  }
};

export default rocketsReducer;
