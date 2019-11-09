import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  useEffect(() => {
    document.title = "Chat App - Login";
  }, []);
  return (
    <div className="form-page">
      <div className="container">
        <div className="center">
          <form className="sign sign_in">
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

export default SignIn;
