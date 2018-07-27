import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Query from './screens/query/query';
import Result from './screens/result/result';
import Location from './fragment/location/location';

let App = () =>
  <Router>
    <div className="app">
      <Location />
      <Switch>
        <Route path="/result/:name" component={ Result } />
        <Route path="/" component={ Query } />
      </Switch>
    </div>
  </Router>
;

export default App;