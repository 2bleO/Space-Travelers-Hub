/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { removeRocket, reserveRocket, updateState } from '../redux/rockets/rockets';

function RocketsPage() {
  const dispatch = useDispatch();
  const storeRockets = useSelector((state) => state.rocketsReducer);

  const fetchItems = async () => {
    const rocketsArray = [];
    const data = await fetch('https://api.spacexdata.com/v3/rockets');
    const rockets = await data.json();
    Object.entries(rockets).map((rocket) => {
      const rocketObject = {
        id: rocket[1].id,
        rocket_name: rocket[1].rocket_name,
        description: rocket[1].description,
        image: rocket[1].flickr_images,
        reserved: false,
      };
      rocketsArray.push(rocketObject);
    });
    dispatch(updateState(rocketsArray));
  };

  useEffect(() => {
    if (storeRockets.length === 0) {
      fetchItems();
    }
  }, []);

  function updateRocket(index) { // the curly brace opens a multiline function
    const rocketsArray = [...storeRockets];
    if (rocketsArray[index - 1].reserved === false) {
      dispatch(reserveRocket(index - 1));
    } else {
      dispatch(removeRocket(index - 1));
    }
  }

  function showReservation(reserved, rocketName, description) {
    if (reserved === false) {
      document.getElementById(rocketName).classList.add('btn-primary');
      document.getElementById(rocketName).innerHTML = 'Reserve Rocket';
      document.getElementById(description).style.display = 'none';
    } else {
      document.getElementById(rocketName).classList.remove('btn-primary');
      document.getElementById(rocketName).innerHTML = 'Cancel Reservation';
      document.getElementById(description).style.display = 'block';
    }
  }

  const checkReserved = (reserved, rocketName, description) => {
    if (reserved === true) {
      setTimeout(() => { showReservation(reserved, rocketName, description); }, 100);
    }
  };

  return (
    <div className="page">
      {storeRockets.map((rocket) => (
        <div key={rocket.rocket_name} className="rocket">
          <img src={rocket.image[0]} alt="rocket" width="150px" />
          <div className="rocket_details">
            <div>
              <h4>{rocket.rocket_name}</h4>
              <div className="description">
                <div id={rocket.description} style={{ display: 'none' }} className="reserved">reserved</div>
                <div>{rocket.description}</div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                id={rocket.rocket_name}
                onClick={() => {
                  updateRocket(rocket.id);
                  showReservation(rocket.reserved, rocket.rocket_name, rocket.description);
                }}
              >
                Reserve Rocket
              </button>
              <div>
                {checkReserved(rocket.reserved, rocket.rocket_name, rocket.description)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default RocketsPage;
