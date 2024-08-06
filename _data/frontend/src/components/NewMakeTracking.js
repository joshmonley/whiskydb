import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewMakeTracking = () => {
  const [newMakes, setNewMakes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/newmake');
      setNewMakes(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>New Make Tracking</h1>
      {newMakes.map((newMake) => (
        <div key={newMake._id}>
          <h2>Barrel ID: {newMake.barrel_id}</h2>
          <p>Style: {newMake.style}</p>
          <p>Capacity Liters: {newMake.capacity_liters}</p>
          {/* Display other details */}
        </div>
      ))}
    </div>
  );
};

export default NewMakeTracking;
