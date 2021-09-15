import axios from 'axios';

const GET_MISSIONS = 'missions/GET_MISSIONS';
const JOIN_MISSION = 'missions/JOIN_MISSION';
const LEAVE_MISSION = 'missions/LEAVE_MISSION';

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

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];

    case JOIN_MISSION:
      newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return newState;

    case LEAVE_MISSION:
      newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return newState;

    default:
      return state;
  }
};

export default reducer;
