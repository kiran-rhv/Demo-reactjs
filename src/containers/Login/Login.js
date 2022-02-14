import React, { useState } from "react";
import "../Login/Login.css";
import login from "../../assets/images/userlogin.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader";
import { Formik, Form, Field, yupToFormErrors } from "formik";
import * as Yup from "yup";

const LoginScreen = () => {
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

  const loginHandler = (event) => {
    event.preventDefault();
    setisloading(true);
    axios
      .post("https://dbapi.dollarbirdinc.com/login", formvalues)
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
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid E-mail ID")
            .required("Please Enter E-mail ID"),

          password: Yup.string().required("Please Enter the Password"),
        })}
      ></Formik>
      {isloading && <Loader />}
      <div className="loginForm">
        <img className="logo" src={login} alt="user login logo" />
        <h3 className="text-center mt-3">Login</h3>
        <form className="mt-4 mx-auto userForm" onSubmit={loginHandler}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email ID / Username"
              aria-label="Email ID"
              value={formvalues.email}
              onChange={OnchangeHnadler}
              id="email"
              required
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control border-top-0 border-left-0 border-right-0"
              placeholder="Password"
              aria-label="Password"
              value={formvalues.password}
              onChange={OnchangeHnadler}
              id="password"
              required
            />
          </div>
          <button
            type="submit"
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
    </>
  );
};

export default LoginScreen;
