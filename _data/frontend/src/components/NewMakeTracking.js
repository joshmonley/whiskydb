import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewMakeTracking = () => {
  const [newMakes, setNewMakes] = useState([]);
  const [formData, setFormData] = useState({
    barrel_id: '',
    style: '',
    capacity_liters: '',
    remaining_quantity_liters: '',
    abv_percentage: '',
    last_batch_number: '',
    first_filled: '',
    last_topped_up: '',
    last_bottled: '',
    previous_fill: '',
    bottlings: []
  });

  useEffect(() => {
    fetchNewMakes();
  }, []);

  const fetchNewMakes = async () => {
    try {
      const response = await axios.get('/newmake');
      setNewMakes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/newmake', formData);
      setNewMakes([...newMakes, formData]);
      setFormData({
        barrel_id: '',
        style: '',
        capacity_liters: '',
        remaining_quantity_liters: '',
        abv_percentage: '',
        last_batch_number: '',
        first_filled: '',
        last_topped_up: '',
        last_bottled: '',
        previous_fill: '',
        bottlings: []
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/newmake/${id}`);
      setNewMakes(newMakes.filter((make) => make._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>New Make Tracking</h2>

      <form onSubmit={handleSubmit}>
        {/* form fields */}
        <button type="submit">Add New Make</button>
      </form>

      <ul>
        {newMakes.map((make) => (
          <li key={make._id}>
            Barrel ID: {make.barrel_id} - Style: {make.style} - Capacity: {make.capacity_liters} liters - Remaining: {make.remaining_quantity_liters} liters - ABV: {make.abv_percentage}%
            <button onClick={() => handleDelete(make._id)}>Delete</button>
            {/* Add an Edit button and form here for updates */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewMakeTracking;