import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NewMakeTracking from './components/NewMakeTracking';
import RetailWhiskyCollection from './components/RetailWhiskyCollection';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newmake-tracking" element={<NewMakeTracking />} />
          <Route path="/retail-whisky-collection" element={<RetailWhiskyCollection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
