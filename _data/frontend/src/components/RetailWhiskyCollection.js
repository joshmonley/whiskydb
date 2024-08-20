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
  const [errors, setErrors] = useState({});
  const [editing, setEditing] = useState(false);
  const [selectedWhisky, setSelectedWhisky] = useState(null);

  useEffect(() => {
    fetchWhiskies();
  }, []);

  const fetchWhiskies = async () => {
    try {
      const response = await axios.get('/collection');
      setWhiskies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validateFormData()) {
        if (editing) {
          await axios.put(`/collection/${selectedWhisky._id}`, formData);
        } else {
          await axios.post('/collection', formData);
        }
        fetchWhiskies();
        setFormData({ name: '', type: '', age: '', abv: '', price: '', stock: '' });
        setEditing(false);
        setSelectedWhisky(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/collection/${id}`);
      fetchWhiskies();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (whisky) => {
    setEditing(true);
    setSelectedWhisky(whisky);
    setFormData(whisky);
  };

  const handleNew = () => {
    setEditing(false);
    setSelectedWhisky(null);
    setFormData({ name: '', type: '', age: '', abv: '', price: '', stock: '' });
  };

  const validateFormData = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.type) {
      errors.type = 'Type is required';
    }
    if (!formData.age || formData.age < 0) {
      errors.age = 'Age must be a positive number';
    }
    if (!formData.abv || formData.abv < 0) {
      errors.abv = 'ABV must be a positive number';
    }
    if (!formData.price || formData.price < 0) {
      errors.price = 'Price must be a positive number';
    }
    if (!formData.stock || formData.stock < 0) {
      errors.stock = 'Stock must be a positive number';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
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
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        <input
          type="text"
          placeholder="Type"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        />
        {errors.type && <div style={{ color: 'red' }}>{errors.type}</div>}
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
        <input
          type="number"
          placeholder="ABV"
          value={formData.abv}
          onChange={(e) => setFormData({ ...formData, abv: e.target.value })}
        />
        {errors.abv && <div style={{ color: 'red' }}>{errors.abv}</div>}
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        {errors.price && <div style={{ color: 'red' }}>{errors.price}</div>}
        <input
          type="number"
          placeholder="Stock"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
        />
       {errors.stock && <div style={{ color: 'red' }}>{errors.stock}</div>}
        <button type="submit">Submit</button>
        <button type="button" onClick={handleNew}>New</button>
      </form>

      <ul>
        {whiskies.map((whisky) => (
          <li key={whisky._id}>
            <span>{whisky.name}</span>
            <span>{whisky.type}</span>
            <span>{whisky.age}</span>
            <span>{whisky.abv}</span>
            <span>{whisky.price}</span>
            <span>{whisky.stock}</span>
            <button onClick={() => handleEdit(whisky)}>Edit</button>
            <button onClick={() => handleDelete(whisky._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RetailWhiskyCollection;