import React from "react";
import "../Register/Register.css";
import login from "../../assets/images/userlogin.png";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div>
      <div className="registerForm">
        <img className="logo" src={login} alt="user register logo" />
        <h3 className="text-center mt-3">Create an Account</h3>
        <form className="mx-auto userFormRegister">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control border-top-0 border-left-0 border-right-0"
              placeholder="Username"
              aria-label="Username"
              aria-required="true"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control border-top-0 border-left-0 border-right-0"
              placeholder="Email ID"
              aria-label="Email ID"
              aria-required="true"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control border-top-0 border-left-0 border-right-0"
              placeholder="Password"
              aria-label="Password"
              aria-required="true"
            />
          </div>
          <button
            type="button"
            className="btn btn-success mx-auto w-50 d-flex justify-content-center align-items-center btnRegister"
          >
            Sign Up
          </button>
          <div className="mt-3 mx-1 border-top pt-2">
            <Link className="font-italic" to="/">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
