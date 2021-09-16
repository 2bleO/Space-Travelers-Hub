import {
  Table, Badge, Button, Container,
} from 'react-bootstrap';
import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission, leaveMission } from '../redux/missions/missions';

const MissionsPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  const leave = (e) => {
    dispatch(leaveMission(e.target.id));
  };

  const join = (e) => {
    dispatch(joinMission(e.target.id));
  };

  return (
    <Container fluid className="table-responsive-sm">
      <Table className="my-3 table-bordered table-striped">
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
              <td className="px-4 align-middle">
                {
                mission.reserved ? (
                  <Badge className="bg-info">Active&nbsp;Member</Badge>
                ) : (
                  <Badge className="bg-secondary">NOT&nbsp;A&nbsp;MEMBER</Badge>
                )
                }
              </td>
              <td className="px-4 align-middle">
                {
                mission.reserved ? (
                  <Button variant="outline-danger" id={mission.mission_id} onClick={leave}>Leave&nbsp;Mission</Button>
                ) : (
                  <Button variant="outline-secondary" id={mission.mission_id} onClick={join}>Join&nbsp;Mission</Button>
                )
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MissionsPage;
