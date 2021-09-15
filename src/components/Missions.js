import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);
  console.log(missions);
  return (
    <>
      <ul>
        { missions.map((mission) => (
          <li key={mission.mission_id}>
            <div>
              <span>{mission.mission_name}</span>
              <span>{mission.description}</span>
              <span>{mission.wikipedia}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Missions;
