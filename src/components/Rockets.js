/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/jsx-key */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { updateState } from '../redux/rockets/rockets';

function RocketsPage() {
  const storeRockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  const [rockets, setRockets] = useState([]);
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
    setRockets(rocketsArray);
    dispatch(updateState(rockets));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  function fetchRocket(index) { // the curly brace opens a multiline function
    const rocketsArray = rockets;
    if (rocketsArray[index - 1].reserved === true) {
      rocketsArray[index - 1].reserved = false;
    } else {
      rocketsArray[index - 1].reserved = true;
    }
    setRockets(rocketsArray);
    dispatch(updateState(rockets));
  }

  function showReservation (rocketName, description) {
    if (document.getElementById(rocketName).classList.contains('btn-primary') === false) {
      document.getElementById(rocketName).classList.add('btn-primary');
      document.getElementById(rocketName).innerHTML = 'Reserve Rocket';
      document.getElementById(description).style.display = 'none';
    } else {
      document.getElementById(rocketName).classList.remove('btn-primary');
      document.getElementById(rocketName).innerHTML = 'Cancel Reservation';
      document.getElementById(description).style.display = 'block';
    }
  }

  return (
    <div className="page">
      {storeRockets.map((rocket) => (
        <div className="rocket">
          <img src={rocket.flickr_images} alt="rocket" width="150px" />
          <div className="rocket_details" id={rocket.id + 100}>
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
                  fetchRocket(rocket.id);
                  showReservation(rocket.rocket_name, rocket.description);
                }}
              >
                Reserve Rocket
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default RocketsPage;
