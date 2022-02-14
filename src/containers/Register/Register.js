import React, { useState } from "react";
import "../Register/Register.css";
import login from "../../assets/images/userlogin.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader";

const RegisterScreen = () => {
  const [formvalues, setformvalues] = useState({
    name: "",
    email: "",
    password: "",
    google_id: "",
    type: "email",
  });

  const [isloading, setisloading] = useState(false);

  const OnchangeHnadler = (event) => {
    const { id, value } = event.target;
    if (id === "name") {
      setformvalues({
        ...formvalues,
        name: value,
      });
    }
    if (id === "email") {
      setformvalues({
        ...formvalues,
        email: value,
      });
    }
    if (id === "password") {
      setformvalues({
        ...formvalues,
        password: value,
      });
    }
  };

  const registerHandler = (event) => {
    event.preventDefault();
    setisloading(true);
    axios
      .post("https://dbapi.dollarbirdinc.com/signup", formvalues)
      .then(function (response) {
        console.log("Resp", response);
        setisloading(false);
      })
      .catch(function (error) {
        console.log("err", error);
        setisloading(false);
      });
  };

  return (
    <div>
      {isloading && <Loader />}
      <div className="registerForm">
        <img className="logo" src={login} alt="user register logo" />
        <h3 className="text-center mt-3">Create an Account</h3>
        <form className="mx-auto userFormRegister" onSubmit={registerHandler}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control border-top-0 border-left-0 border-right-0"
              placeholder="Username"
              aria-label="Username"
              aria-required="true"
              id="name"
              value={formvalues.name}
              onChange={OnchangeHnadler}
              required
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control border-top-0 border-left-0 border-right-0"
              placeholder="Email ID"
              aria-label="Email ID"
              aria-required="true"
              id="email"
              value={formvalues.email}
              onChange={OnchangeHnadler}
              required
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control border-top-0 border-left-0 border-right-0"
              placeholder="Password"
              aria-label="Password"
              aria-required="true"
              id="password"
              value={formvalues.password}
              onChange={OnchangeHnadler}
              required
            />
          </div>
          <button
            type="submit"
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
