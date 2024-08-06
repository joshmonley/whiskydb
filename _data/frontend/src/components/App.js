import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewMakeTracking from './NewMakeTracking';
import RetailWhiskyCollection from './RetailWhiskyCollection';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/newmake" component={NewMakeTracking} />
        <Route path="/collection" component={RetailWhiskyCollection} />
        <Route path="/" exact>
          <h1>Welcome to WhiskyDB</h1>
          <a href="/newmake">New Make Tracking</a>
          <a href="/collection">Retail Whisky Collection</a>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
