import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RetailWhiskyCollection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/whisky/collection')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Retail Whisky Collection</h2>
      {/* Render data here */}
    </div>
  );
};

export default RetailWhiskyCollection;
