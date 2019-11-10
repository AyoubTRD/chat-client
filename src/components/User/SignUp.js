import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import userApi from "../../api/userApi";

import { signIn } from "../../actions/user.js";
import { connect } from "react-redux";

import connectToSocket from "../../socket";

const SignUp = ({ signIn }) => {
  useEffect(() => {
    document.title = "Chat App - Sign Up";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "username") {
      setUsername(e.target.value);
    }
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      if (password.length < 6) {
        return setError("The password must be 6 characters long or more");
      }
      const res = await userApi.post("/", {
        username,
        email,
        password
      });

      signIn(res.data.user, res.data.token);
      connectToSocket(res.data.token);
    } catch (e) {
      setError("The email or the username you provided is already taken");
    }
  };

  return (
    <div className="form-page">
      <div className="container">
        <div className="center">
          <form
            className="sign sign_up"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <h1>Create an account</h1>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>

            <div className="field">
              <label htmlFor="email" className="field__label">
                email
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                name="email"
                id="email"
                className="field__input"
              />
            </div>

            <div className="field">
              <label htmlFor="username" className="field__label">
                username
              </label>
              <input
                type="username"
                required
                placeholder="John Doe"
                name="username"
                id="username"
                className="field__input"
              />
            </div>

            <div className="field">
              <label htmlFor="password" className="field__label">
                password
              </label>
              <input
                type="password"
                required
                placeholder="*******"
                name="password"
                id="password"
                className="field__input"
              />
              <p className="requirements">
                the password should be at least 6 characters
              </p>
            </div>

            <p className="error">{error}</p>

            <button type="submit" className="btn btn-green btn-block">
              Sign Up
            </button>

            <hr />

            <p className="choice">
              Already have an account?{" "}
              <Link to="/signin" className="choice__link">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default connect(
  null,
  { signIn }
)(SignUp);
