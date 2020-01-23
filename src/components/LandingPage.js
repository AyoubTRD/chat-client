import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bgVid from "../assets/bg.mp4";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Chat App - Real Time Web Application";
  }, []);
  return (
    <div className="landing-page">
      <video src={bgVid} loop autoPlay></video>
      <p className="shot">Video made by <a href="https://dribbble.com/zakeklund" target="blank">Zak Steele-Eklund</a>
</p>
      <div className="my-container">
        <nav className="landing-page__navbar">
          <h1 className="landing-page__heading">Chat APP</h1>
        </nav>
        <div className="hero">
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
      </div>
    </div>
  );
};

export default LandingPage;
