/* eslint-disable import/prefer-default-export */
const SET_ROCKETS = 'bookStore/books/GET_ROCKETS';
const initialState = [];

export const updateState = (payload) => ({
  type: SET_ROCKETS,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
