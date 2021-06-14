import React from 'react';
import css from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './home/Home';

function App() {
  return (
    <div className={css.App}>
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/training" >

            </Route>
            <Route exact path="/" >
              
            </Route>
            <Route exact path="/*" >
              <Redirect to="/" />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
