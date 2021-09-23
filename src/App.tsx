import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SurveyList } from './contents/SurveyList';
import { CreateSurveyItem } from './contents/CreateSurveyItem';
import { SurveyDetail } from './contents/SurveyDetail';

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
          <Route path="/view">
            <SurveyDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
