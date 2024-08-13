import React, { useState, useEffect } from 'react';

const RetailWhiskyCollection = () => {
  const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    fetch('/collection')
      .then(response => response.json())
      .then(data => setCollectionData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Retail Whisky Collection</h2>
      {collectionData.length > 0 ? (
        collectionData.map((whisky, index) => (
          <div key={index}>
            <h3>{whisky.name}</h3>
            <p>Type: {whisky.type}</p>
            <p>Age: {whisky.age} years</p>
            <p>ABV: {whisky.abv}%</p>
            <p>Price: ${whisky.price}</p>
            <p>Stock: {whisky.stock} bottles</p>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default RetailWhiskyCollection;
