import React, { useEffect } from "react";
import ReactNotification from "react-notifications-component"

import history from "../history";
import { Router, Switch, Route } from "react-router-dom";
import { signIn } from "../actions/user";
import { connect } from "react-redux";
import connectToSocket from "../socket";


import LandingPage from "./LandingPage";
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";

import Chat from "./Chat/Chat";

const App = ({ signIn }) => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      signIn(user.user, user.token);
      connectToSocket(user.token);
    }
  }, []);

  return (
    <Router history={history}>
      <ReactNotification />
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

        <Route path="/chat" exact>
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
};

export default connect(
  null,
  { signIn }
)(App);
