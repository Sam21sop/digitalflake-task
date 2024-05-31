import React from "react";
import "./Home.scss";
import Login from "../auth/Login";

const Home = () => {
  return (
    <div className="home">
      <div className="login-form">
        <Login />
      </div>
    </div>
  );
};


export default Home;
