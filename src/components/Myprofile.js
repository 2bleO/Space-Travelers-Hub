/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import { useSelector } from 'react-redux';
import {
  Table, Container,
} from 'react-bootstrap';

function MyprofilePage() {
  const reservedRockets = useSelector((state) => state.rocketsReducer.filter((rocket) => rocket.reserved === true));
  const joinedMissions = useSelector((state) => state.missionReducer.filter((mission) => mission.reserved === true));

  return (
    <>
      <Container fluid className="d-flex">
        <Table className="col mx-2">
          <thead>
            <tr>
              <th scope="col">My Missions</th>
            </tr>
          </thead>
          <tbody>
            { joinedMissions.map((mission) => (
              <tr>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Table className="col mx-2">
          <thead>
            <tr>
              <th scope="col">My Rockets</th>
            </tr>
          </thead>
          <tbody>
            { reservedRockets.map((rocket) => (
              <tr>
                <td>{rocket.rocket_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
export default MyprofilePage;
