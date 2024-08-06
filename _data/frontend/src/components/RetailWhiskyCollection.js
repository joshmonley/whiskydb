import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RetailWhiskyCollection = () => {
  const [whiskies, setWhiskies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/collection');
      setWhiskies(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Retail Whisky Collection</h1>
      {whiskies.map((whisky) => (
        <div key={whisky._id}>
          <h2>Name: {whisky.name}</h2>
          <p>Age: {whisky.age}</p>
          <p>Distillery: {whisky.distillery}</p>
          {/* Display other details */}
        </div>
      ))}
    </div>
  );
};

export default RetailWhiskyCollection;
