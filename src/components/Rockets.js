/* eslint-disable react/jsx-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getRockets } from '../redux/rockets/rockets';

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
      };
      rocketsArray.push(rocketObject);
    });
    console.log(rocketsArray);
    setRockets(rocketsArray);
    dispatch(getRockets(rocketsArray));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="page">
      {rockets.map((rocket) => (
        <div className="rocket">
          <img src={rocket.image} alt="rocket" width="150px" />
          <div className="rocket_details">
            <div>{rocket.rocket_name}</div>
            <div className="description">{rocket.description}</div>
            <button type="button" className="btn btn-primary">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default RocketsPage;
