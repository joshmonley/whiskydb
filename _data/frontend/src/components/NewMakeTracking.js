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
    bottlings: []  // Handle this array field separately if needed
  });

  useEffect(() => {
    fetchNewMakes();
  }, []);

  const fetchNewMakes = async () => {
    const response = await axios.get('/newmake');
    setNewMakes(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/newmake', formData);
    fetchNewMakes();  // Refresh the list
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
      bottlings: []  // Reset this array field as well
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`/newmake/${id}`);
    fetchNewMakes();
  };

  return (
    <div>
      <h2>New Make Tracking</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Barrel ID"
          value={formData.barrel_id}
          onChange={(e) => setFormData({ ...formData, barrel_id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Style"
          value={formData.style}
          onChange={(e) => setFormData({ ...formData, style: e.target.value })}
        />
        <input
          type="number"
          placeholder="Capacity (liters)"
          value={formData.capacity_liters}
          onChange={(e) => setFormData({ ...formData, capacity_liters: e.target.value })}
        />
        <input
          type="number"
          placeholder="Remaining Quantity (liters)"
          value={formData.remaining_quantity_liters}
          onChange={(e) => setFormData({ ...formData, remaining_quantity_liters: e.target.value })}
        />
        <input
          type="number"
          placeholder="ABV (%)"
          value={formData.abv_percentage}
          onChange={(e) => setFormData({ ...formData, abv_percentage: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Batch Number"
          value={formData.last_batch_number}
          onChange={(e) => setFormData({ ...formData, last_batch_number: e.target.value })}
        />
        <input
          type="date"
          placeholder="First Filled Date"
          value={formData.first_filled}
          onChange={(e) => setFormData({ ...formData, first_filled: e.target.value })}
        />
        <input
          type="date"
          placeholder="Last Topped Up Date"
          value={formData.last_topped_up}
          onChange={(e) => setFormData({ ...formData, last_topped_up: e.target.value })}
        />
        <input
          type="date"
          placeholder="Last Bottled Date"
          value={formData.last_bottled}
          onChange={(e) => setFormData({ ...formData, last_bottled: e.target.value })}
        />
        <input
          type="text"
          placeholder="Previous Fill"
          value={formData.previous_fill}
          onChange={(e) => setFormData({ ...formData, previous_fill: e.target.value })}
        />
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
