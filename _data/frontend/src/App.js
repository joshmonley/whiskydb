import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewMakeTracking from './components/NewMakeTracking';
import RetailWhiskyCollection from './components/RetailWhiskyCollection';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-make-tracking" component={NewMakeTracking} />
        <Route path="/retail-whisky-collection" component={RetailWhiskyCollection} />
      </Switch>
    </div>
  </Router>
);

export default App;
