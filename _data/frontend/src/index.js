import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NewMake from '../src/components/NewMakeTracking';
import RetailWhisky from '../src/components/RetailWhiskyCollection';

const Index = () => {
  return (
    <div>
      <h1>Whisky Database</h1>
      <ul>
        <li><Link to="/new-make">Create a New Whisky Make</Link></li>
        <li><Link to="/retail-whisky">View Retail Whisky</Link></li>
      </ul>
      <Switch>
        <Route path="/new-make" component={NewMake} />
        <Route path="/retail-whisky" component={RetailWhisky} />
      </Switch>
    </div>
  );
};

export default Index;