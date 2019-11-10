import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userApi from "../../api/userApi";

import { signIn } from "../../actions/user.js";
import { connect } from "react-redux";
import connectToSocket from "../../socket";

const SignIn = ({ signIn }) => {
  useEffect(() => {
    document.title = "Chat App - Login";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = ({ target: { id, value } }) => {
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const res = await userApi.post("/signin", {
        email,
        password
      });
      signIn(res.data.user, res.data.token);
      connectToSocket(res.data.token);
    } catch (e) {
      setError("Wrong password or email");
    }
  };

  return (
    <div className="form-page">
      <div className="container">
        <div className="center">
          <form
            className="sign sign_in"
            onChange={handleChange}
            onSubmit={handleSubmit}
          >
            <h1>Sign into your account</h1>
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
            </div>
            <p className="error">{error}</p>

            <button type="submit" className="btn btn-green btn-block">
              Sign In
            </button>

            <hr />

            <p className="choice">
              You don't have an account?{" "}
              <Link to="/signup" className="choice__link">
                Create One
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
)(SignIn);
