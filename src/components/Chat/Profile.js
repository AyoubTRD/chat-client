import React from "react";

const Profile = ({ user: { avatar, username, email } }) => {
  return (
    <div className="profile">
      <div className="profile__info">
        <img className="profile__avatar" src={avatar} alt="Your avatar" />

        <h2 className="profile__username">{username}</h2>
        <p className="profile__email">{email}</p>
      </div>

      <div className="profile__actions">
        <button className="btn-action">Sign out</button>
      </div>
    </div>
  );
};

export default Profile;
