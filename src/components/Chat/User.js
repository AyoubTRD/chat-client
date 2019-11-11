import React from "react";

import { changeChatroom } from "../../actions/user";
import { connect } from "react-redux";

const User = ({
  user: { avatar, username, online, _id },
  chatroomUser,
  changeChatroom
}) => {
  const handleClick = () => {
    console.log("clicked");
    changeChatroom({ username, avatar, online, _id });
  };

  return (
    <div
      className={`user user-${_id === chatroomUser._id ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="row">
        <div className="col-xs-2">
          <img
            src={avatar}
            alt={`${username}'s avatar`}
            className="user__avatar"
          />
        </div>
        <div className="col-xs-10 user__details">
          <p className="user__username">{username}</p>
          <p
            className={`user__status user__status-${
              online ? "online" : "offline"
            }`}
          >
            {online ? "online" : "offline"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect(
  ({ chatroomUser }) => ({ chatroomUser }),
  { changeChatroom }
)(User);
