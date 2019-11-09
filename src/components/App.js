import React from "react";

import history from "../history";
import { Router, Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/signup" exact>
          <SignUp />
        </Route>

        <Route path="/signin" exact>
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
