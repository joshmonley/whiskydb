import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [newMakes, setNewMakes] = useState([]);
  const [formData, setFormData] = useState({
    barrel_id: '',
    style: '',
    // add more form fields here
  });
  const [editFormData, setEditFormData] = useState({
    barrel_id: '',
    style: '',
    // add more edit form fields here
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    axios.get('/api/makes')
      .then(response => {
        setNewMakes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/makes', formData)
      .then(response => {
        setNewMakes([...newMakes, response.data]);
        setFormData({
          barrel_id: '',
          style: '',
          // reset more form fields here
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleEdit = (make) => {
    setEditing(true);
    setEditFormData(make);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`/api/makes/${editFormData._id}`, editFormData)
      .then(response => {
        setNewMakes(newMakes.map((make) => make._id === response.data._id ? response.data : make));
        setEditing(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/makes/${id}`)
      .then(response => {
        setNewMakes(newMakes.filter((make) => make._id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>New Make Tracking</h2>

      <form onSubmit={handleSubmit}>
        <label>Barrel ID:</label>
        <input type="text" value={formData.barrel_id} onChange={(e) => setFormData({ ...formData, barrel_id: e.target.value })} />
        <br />

        <label>Style:</label>
        <input type="text" value={formData.style} onChange={(e) => setFormData({ ...formData, style: e.target.value })} />
        <br />

        {/* add more form fields here */}

        <button type="submit">Add New Make</button>
      </form>

      {newMakes.map((make) => (
        <div key={make._id}>
          <p>Barrel ID: {make.barrel_id}</p>
          <p>Style: {make.style}</p>
          {/* display other make fields */}

          <button onClick={() => handleEdit(make)}>Edit</button>
          {editing && editFormData._id === make._id ? (
            <form onSubmit={handleUpdate}>
              <label>Barrel ID:</label>
              <input type="text" value={editFormData.barrel_id} onChange={(e) => setEditFormData({ ...editFormData, barrel_id: e.target.value })} />
              <br />

              <label>Style:</label>
              <input type="text" value={editFormData.style} onChange={(e) => setEditFormData({ ...editFormData, style: e.target.value })} />
              <br />

              {/* add more edit form fields here */}

              <button type="submit">Update</button>
            </form>
          ) : null}

          <button onClick={() => handleDelete(make._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;