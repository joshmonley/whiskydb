import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RetailWhiskyCollection = () => {
  const [whiskies, setWhiskies] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    age: '',
    abv: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    fetchWhiskies();
  }, []);

  const fetchWhiskies = async () => {
    const response = await axios.get('/collection');
    setWhiskies(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/collection', formData);
    fetchWhiskies(); // Refresh the list
    setFormData({ name: '', type: '', age: '', abv: '', price: '', stock: '' });
  };

  const handleDelete = async (id) => {
    await axios.delete(`/collection/${id}`);
    fetchWhiskies();
  };

  return (
    <div>
      <h2>Retail Whisky Collection</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Type"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <input
          type="number"
          placeholder="ABV"
          value={formData.abv}
          onChange={(e) => setFormData({ ...formData, abv: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
        />
        <button type="submit">Add Whisky</button>
      </form>

      <ul>
        {whiskies.map((whisky) => (
          <li key={whisky._id}>
            {whisky.name} - {whisky.type} - {whisky.age} years - {whisky.abv}% - ${whisky.price} - Stock: {whisky.stock}
            <button onClick={() => handleDelete(whisky._id)}>Delete</button>
            {/* Add an Edit button and form here for updates */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RetailWhiskyCollection;
