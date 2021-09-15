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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          { missions.map((mission) => (
            <tr key={mission.mission_id}>
              <th scope="row">{mission.mission_name}</th>
              <td>{mission.description}</td>
              <td>Not a Member</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
