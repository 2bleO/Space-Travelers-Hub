/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux';

function MyprofilePage() {
  const reservedRockets = useSelector((state) => state.rocketsReducer.filter((rocket) => rocket.reserved === true));

  return (
    <div className="reserved_rockets">
      <h2>Reserved Rockets</h2>
      <div>

        {reservedRockets.map((rocket) => (
          <div className="rocket">
            <img src={rocket.image[0]} alt="rocket" width="150px" />
            <div className="rocket_details">
              <h4><div>{rocket.rocket_name}</div></h4>
              <div className="description">
                <div id={rocket.description} style={{ display: 'none' }} className="reserved">reserved</div>
                <div>{rocket.description}</div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
export default MyprofilePage;
