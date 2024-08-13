import React, { useState, useEffect } from 'react';

const NewMakeTracking = () => {
  const [newMakeData, setNewMakeData] = useState([]);

  useEffect(() => {
    fetch('/newmake')
      .then(response => response.json())
      .then(data => {
        setNewMakeData(data[0]?.barrels || []); // Assuming you want to display the barrels
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>New Make Tracking</h2>
      {newMakeData.length > 0 ? (
        newMakeData.map((barrel, index) => (
          <div key={index}>
            <h3>Barrel ID: {barrel.barrel_id}</h3>
            <p>Style: {barrel.style}</p>
            <p>Capacity: {barrel.capacity_liters} liters</p>
            <p>Last Topped Up: {barrel.last_topped_up}</p>
            <p>First Filled: {barrel.first_filled}</p>
            {/* Display other barrel details as needed */}
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default NewMakeTracking;
