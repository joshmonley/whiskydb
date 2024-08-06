import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'src/components/Home.js';
import NewMakeTracking from 'src/components/NewMakeTracking';
import RetailWhiskyCollection from 'src/components/RetailWhiskyCollection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-make-tracking" element={<NewMakeTracking />} />
        <Route path="/retail-whisky-collection" element={<RetailWhiskyCollection />} />
      </Routes>
    </Router>
  );
}

export default App;
