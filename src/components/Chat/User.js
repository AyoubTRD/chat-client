import React from "react";

const User = ({ user: { avatar, username, online } }) => {
  return (
    <div className="user">
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

export default User;
