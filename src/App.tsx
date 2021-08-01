import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SurveyList } from './contents/SurveyList'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <SurveyList />
          </Route>
          <Route path="/test">
            <p>Test Routing!</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
