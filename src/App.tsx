import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SurveyList } from './contents/SurveyList';
import { CreateSurveyItem } from './contents/CreateSurveyItem';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <SurveyList />
          </Route>
          <Route path="/new">
            <CreateSurveyItem />
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
