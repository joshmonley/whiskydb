import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RetailWhiskyCollection = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios.get('/api/collection')
      .then(response => setCollection(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Retail Whisky Collection</h2>
      <ul>
        {collection.map(item => (
          <li key={item._id}>
            Name: {item.name}, Age: {item.age}
            {/* Display more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RetailWhiskyCollection;
