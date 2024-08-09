import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NewMakeTracking from './components/NewMakeTracking';
import RetailWhiskyCollection from './components/RetailWhiskyCollection';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/newmake">New Make Tracking</a></li>
            <li><a href="/collection">Retail Whisky Collection</a></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/newmake" component={NewMakeTracking} />
          <Route path="/collection" component={RetailWhiskyCollection} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
