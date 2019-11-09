import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/illustration.png";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Chat App - Real Time Web Application";
  }, []);
  return (
    <div className="landing-page">
      <div className="my-container">
        <nav className="landing-page__navbar">
          <h1 className="landing-page__heading">Chat APP</h1>
        </nav>
        <div className="hero">
          <div className="row">
            <div className="col-md-8 col-sm-8">
              <h2 className="big">
                Start chatting with your friends right now
              </h2>
              <Link to="/signup" className="btn btn-white">
                Sign Up
              </Link>
              <Link to="/signin" className="btn btn-black">
                Login
              </Link>
            </div>
            <div className="col-md-4 col-sm-4">
              <img
                src={illustration}
                alt="laptop illustration"
                className="landing-page__illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
