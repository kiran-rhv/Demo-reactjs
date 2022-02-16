import React from "react";
import "../Login/Login.css";
import login from "../../assets/images/userlogin.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

const LoginScreen = () => {
  return (
    <div>
      <Formik
        initialValues={{
          EmailId: "",
          google_id: "",
          password: "",
          type: "",
        }}
        validationSchema={Yup.object({
          EmailId: Yup.string()
            .email("Invalid E-mail ID")
            .required("Please Enter E-mail ID"),
          password: Yup.string().required("Please Enter the Password"),
        })}
        onSubmit={(values) => {
          let email_id = values.EmailId;
          console.log("Mail ID is : ", email_id);
          let password = values.password;
          console.log("Password : ", password);

          axios({
            method: "POST",
            url: "https://dbapi.dollarbirdinc.com/login",
            data: {
              email: email_id,
              google_id: "",
              password: password,
              type: "email",
            },
          })
            .then((response) => {
              console.log(response.data.msg);
              if (response.data.statuscode == 200) {
                const accesstoken = response.data.token;
                console.log("Success", response);
                localStorage.setItem("AccessToken", accesstoken);
                window.location = "/products";
              } else {
                console.log("res--", response);
              }
            })
            .catch((err) => {
              console.log("POST err", err);
            });
        }}
      >
        {(props) => (
          <div className="loginForm">
            <img className="logo" src={login} alt="user login logo" />
            <h3 className="text-center mt-3">Login</h3>
            <Form className="mt-4 mx-auto userForm">
              <div className="input-group mb-3">
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Email ID / Username"
                  aria-label="Email ID"
                  id="email"
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
                  id="password"
                  name="password"
                ></Field>
                <div className="errorMsg">
                  <ErrorMessage name="password"></ErrorMessage>
                </div>
              </div>
              <Button
                varient="primary"
                className="btn mx-auto w-50 d-flex justify-content-center align-items-center btnLogin"
                disabled={props.isValid == false}
                type="submit"
              >
                Login
              </Button>
              <div className="mt-3 mx-1 pt-2">
                <Link className="font-italic" to="/register">
                  Sign Up
                </Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      {/* <Alert variant="danger">Error</Alert> */}
    </div>
  );
};

export default LoginScreen;
