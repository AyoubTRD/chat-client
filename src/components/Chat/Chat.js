import React, { useEffect } from "react";

import { connect } from "react-redux";
import history from "../../history";

import User from "./User";
import Profile from "./Profile";

const fromObjToArr = obj => {
  const arr = [];
  for (let i in obj) {
    arr.push(obj[i]);
  }
  return arr;
};

const Chat = ({ users, user }) => {
  useEffect(() => {
    if (!user.token) {
      history.push("/signup");
    }
    document.title = "Start Chatting with your friends";
  }, [users, user]);

  const usersArr = fromObjToArr(users);

  return (
    <div className="chat-page">
      <div className="row">
        <div className="col-md-2">
          <Profile user={user.user || {}} />
        </div>
        <div className="chat">
          <div className="col-md-4">
            {usersArr.map(user => (
              <User user={user} key={user._id} />
            ))}
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default connect(({ users, user }) => ({ users, user }))(Chat);
