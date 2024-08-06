import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [newmake, setNewmake] = useState([]);
    const [collection, setCollection] = useState([]);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        fetchNewmake();
        fetchCollection();
    }, []);

    const fetchNewmake = async () => {
        const res = await axios.get('/api/newmake');
        setNewmake(res.data);
    };

    const fetchCollection = async () => {
        const res = await axios.get('/api/collection');
        setCollection(res.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNewmakeSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/newmake', formData);
        fetchNewmake();
    };

    const handleCollectionSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/collection', formData);
        fetchCollection();
    };

    return (
        <div>
            <h1>New Make Tracking</h1>
            <form onSubmit={handleNewmakeSubmit}>
                {/* Add form fields for newmake */}
                <button type="submit">Add New Make</button>
            </form>
            <ul>
                {newmake.map(item => (
                    <li key={item._id}>{JSON.stringify(item)}</li>
                ))}
            </ul>

            <h1>Retail Whisky Collection</h1>
            <form onSubmit={handleCollectionSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <input name="distillery" placeholder="Distillery" onChange={handleChange} />
                <input name="age" placeholder="Age" onChange={handleChange} />
                <input name="abv" placeholder="ABV" onChange={handleChange} />
                <input name="volume" placeholder="Volume" onChange={handleChange} />
                <input name="price" placeholder="Price" onChange={handleChange} />
                <textarea name="tastingNotes" placeholder="Tasting Notes" onChange={handleChange} />
                <button type="submit">Add Whisky</button>
            </form>
            <ul>
                {collection.map(item => (
                    <li key={item._id}>{item.name} - {item.distillery}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
