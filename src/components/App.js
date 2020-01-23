import React, { useEffect } from "react";
import ReactNotification from "react-notifications-component";

import history from "../history";
import { Router } from "react-router-dom";
import AnimatedSwitch from "./AnimatedSwitch"
import AnimatedRoute from "./AnimatedRoute"
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
      history.push("/chat");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Router history={history}>
      <ReactNotification />
      <AnimatedSwitch animationClassName="slide" animationTimeout={800}>
        <AnimatedRoute path="/" exact>
          <LandingPage />
        </AnimatedRoute>

        <AnimatedRoute path="/signup" exact>
          <SignUp />
        </AnimatedRoute>

        <AnimatedRoute path="/signin" exact>
          <SignIn />
        </AnimatedRoute>

        <AnimatedRoute path="/chat" exact>
          <Chat />
        </AnimatedRoute>
      </AnimatedSwitch>
    </Router>
  );
};

export default connect(
  null,
  { signIn }
)(App);
