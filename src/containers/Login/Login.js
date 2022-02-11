import React from "react";
import "../Login/Login.css";
import login from "../../assets/images/userlogin.png";
import { Link } from "react-router-dom";

// const handleClick = () => {};

const LoginScreen = () => {
  return (
    <div>
      <div className="loginForm">
        <img className="logo" src={login} alt="user login logo" />
        <h3 className="text-center mt-3">Login</h3>
        <form className="mt-4 mx-auto userForm">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control border-top-0 border-left-0 border-right-0"
              placeholder="Email ID / Username"
              aria-label="Email ID"
              required
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control border-top-0 border-left-0 border-right-0"
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
          <div className="mt-3 mx-1 border-top pt-2">
            <Link className="font-italic" to="/register">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
