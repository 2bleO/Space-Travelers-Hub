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
        rocket_name: rocket[1].name,
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

  return (
    <div className="page">
      {rockets.map((rocket) => (
        <div className="rocket">
          <img src={rocket.image} alt="rocket" width="150px" />
          <div className="rocket_details">
            <div>{rocket.rocket_name}</div>
            <div className="description">{rocket.description}</div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                fetchRocket(rocket.id);
              }}
            >
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default RocketsPage;
