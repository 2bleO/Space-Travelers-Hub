/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/jsx-key */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { updateState } from '../redux/rockets/rockets';

function RocketsPage() {
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

  function showReservation (id) {
    if (document.getElementById(id).classList.contains('btn-primary') === false) {
      document.getElementById(id).style.backgroundColor = 'none';
      document.getElementById(id).classList.add('btn-primary');
      document.getElementById(id).innerHTML = 'Reserve Rocket';
    } else {
      document.getElementById(id).classList.remove('btn-primary');
      document.getElementById(id).innerHTML = 'Cancel Reservation';
    }
  }

  return (
    <div className="page">
      {rockets.map((rocket) => (
        <div className="rocket">
          <img src={rocket.image} alt="rocket" width="150px" />
          <div className="rocket_details">
            <div>
              <h4>{rocket.rocket_name}</h4>
              <div className="description">{rocket.description}</div>
              <button
                type="button"
                className="btn btn-primary"
                id={rocket.id}
                onClick={() => {
                  fetchRocket(rocket.id);
                  showReservation(rocket.id);
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
