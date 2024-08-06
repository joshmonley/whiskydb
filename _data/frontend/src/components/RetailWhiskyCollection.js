import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RetailWhiskyCollection() {
  const [whiskies, setWhiskies] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/collection')
      .then(response => setWhiskies(response.data))
      .catch(error => console.error('Error fetching retail whisky collection data:', error));
  }, []);

  const handleCRUD = (action, whiskyId, data) => {
    // Implement CRUD actions with axios POST, PUT, DELETE
  };

  return (
    <div>
      <h2>Retail Whisky Collection</h2>
      {whiskies.map(whisky => (
        <div key={whisky.whisky_id}>
          <h3>{whisky.name}</h3>
          {/* Display whisky details */}
          {/* Add buttons for CRUD operations */}
        </div>
      ))}
    </div>
  );
}

export default RetailWhiskyCollection;
