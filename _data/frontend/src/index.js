import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NewMakeTracking from './components/NewMakeTracking';
import RetailWhiskyCollection from './components/RetailWhiskyCollection';

const Index = () => {
  return (
    <div>
      <h1>Whisky Database</h1>
      <ul>
        <li><Link to="/new-make">Create a New Whisky Make</Link></li>
        <li><Link to="/retail-whisky">View Retail Whisky</Link></li>
      </ul>
      <Routes>
        <Route path="/new-make" element={<NewMakeTracking />} />
        <Route path="/retail-whisky" element={<RetailWhiskyCollection />} />
      </Routes>
    </div>
  );
};

export default Index;
