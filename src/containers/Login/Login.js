import React from "react";
import "../Login/Login.css";
import login from "../../assets/images/userlogin.png";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div>
      <div className="loginForm">
        <img className="logo" src={login} alt="user login image" />
        <h3 className="text-center mt-3">Login</h3>
        <form className="mt-4 userForm mx-auto">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email ID / Username"
              aria-label="Email ID"
              required
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-success mx-auto w-50 d-flex justify-content-center align-items-center btnLogin"
          >
            Login
          </button>
          <div className="mt-3 mx-1">
            <a href="#">Register Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
