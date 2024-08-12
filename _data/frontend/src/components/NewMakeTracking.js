import React, { useState, useEffect } from 'react';

const NewMakeTracking = () => {
    const [whiskies, setWhiskies] = useState([]);

    useEffect(() => {
        fetch('/newmake')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Debugging log
                setWhiskies(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>New Make Tracking</h1>
            {Array.isArray(whiskies) ? (
                whiskies.map((whisky, index) => (
                    <div key={index}>
                        <h2>{whisky.name}</h2>
                        <p>{whisky.details}</p>
                    </div>
                ))
            ) : (
                <p>No whiskies available.</p>
            )}
        </div>
    );
};

export default NewMakeTracking;
