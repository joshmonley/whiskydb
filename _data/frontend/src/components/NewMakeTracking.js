import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewMakeTracking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/nmwhisky/newmake')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>New Make Tracking</h2>
      {/* Render data here */}
    </div>
  );
};

export default NewMakeTracking;
