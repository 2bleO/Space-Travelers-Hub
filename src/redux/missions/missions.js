import axios from 'axios';

const GET_MISSIONS = 'Space-Travelers-Hub/missions/GET_MISSIONS';

const initialState = [];
const BASE_URL = 'https://api.spacexdata.com/v3';

export const getMissions = () => async (dispatch) => {
  const missions = await axios.get(`${BASE_URL}/missions`);
  const missionsArr = await missions.data;
  const list = [...missionsArr];

  dispatch({
    type: GET_MISSIONS,
    payload: list,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];

    default:
      return state;
  }
};

export default reducer;
