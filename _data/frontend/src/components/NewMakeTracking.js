import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewMakeTracking = () => {
  const [barrels, setBarrels] = useState([]);

  useEffect(() => {
    axios.get('/api/newmake')
      .then(response => setBarrels(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>New Make Tracking</h2>
      <ul>
        {barrels.map(barrel => (
          <li key={barrel._id}>
            Barrel ID: {barrel.barrel_id}, Style: {barrel.style}
            {/* Display more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewMakeTracking;
