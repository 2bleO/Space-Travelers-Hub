/* eslint-disable import/prefer-default-export */
const GET_ROCKETS = 'bookStore/books/GET_ROCKETS';
const initialState = [];

export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
