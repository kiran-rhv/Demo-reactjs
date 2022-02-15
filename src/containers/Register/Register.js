import React from "react";
import "../Register/Register.css";
import login from "../../assets/images/userlogin.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

const RegisterScreen = () => {
  return (
    <div>
      <Formik
        initialValues={{
          EmailId: "",
          google_id: "",
          password: "",
          type: "",
          username: "",
        }}
        validationSchema={Yup.object({
          EmailId: Yup.string()
            .email("Invalid E-mail ID")
            .required("E-mail ID Required"),
          password: Yup.string().required("Password Required"),
          username: Yup.string().required("Username Required"),
        })}
        onSubmit={(values) => {
          let email_id = values.EmailId;
          let password = values.password;
          let username = values.username;

          axios({
            method: "POST",
            url: "https://dbapi.dollarbirdinc.com/signup",
            data: {
              email: email_id,
              google_id: "",
              password: password,
              type: "email",
              username: username,
            },
          })
            .then((response) => {
              console.log(response);
              if (response.data.statuscode == 200) {
                console.log("Success");
                window.location = "/";
              }
            })
            .catch((err) => {
              console.log("POST err", err);
            });
        }}
      >
        {(props) => (
          <div className="registerForm">
            <img className="logo" src={login} alt="user register logo" />
            <h3 className="text-center mt-3">Create an Account</h3>
            <Form className="mx-auto userFormRegister">
              <div className="input-group mb-3">
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-required="true"
                  name="username"
                  autoComplete="off"
                ></Field>
                <div className="errorMsg">
                  <ErrorMessage name="username"></ErrorMessage>
                </div>
              </div>
              <div className="input-group mb-3">
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Email ID"
                  aria-label="Email ID"
                  aria-required="true"
                  name="EmailId"
                  autoComplete="off"
                ></Field>
                <div className="errorMsg">
                  <ErrorMessage name="EmailId"></ErrorMessage>
                </div>
              </div>
              <div className="input-group mb-3">
                <Field
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-required="true"
                  name="password"
                ></Field>
                <div className="errorMsg">
                  <ErrorMessage name="password"></ErrorMessage>
                </div>
              </div>
              <Button
                type="submit"
                className="btn mx-auto w-50 d-flex justify-content-center align-items-center btnRegister"
                disabled={props.isValid == false}
              >
                Sign Up
              </Button>
              <div className="mt-3 mx-1 pt-2">
                <Link className="font-italic" to="/">
                  Login
                </Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterScreen;
