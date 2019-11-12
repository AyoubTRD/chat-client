import React from "react";

import { signOut } from "../../actions/user";
import { connect } from "react-redux";

const Profile = ({ user: { avatar, username, email }, signOut }) => {
  const handleClick = () => {
    signOut();
  };

  return (
    <div className="profile">
      <div className="profile__info">
        <img className="profile__avatar" src={avatar} alt="Your avatar" />

        <h2 className="profile__username">{username}</h2>
        <p className="profile__email">{email}</p>
      </div>

      <div className="profile__actions">
        <button className="btn-action btn-action" onClick={handleClick}>
          Sign out
        </button>
        <button className="btn-action btn-action-active">Chat</button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { signOut }
)(Profile);
