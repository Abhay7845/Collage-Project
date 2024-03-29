/** @format */
import React, { useState } from "react";
import { FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "../Style/RegisterLogin.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../HomePage/Footer";
import { Form, Formik, Field } from "formik";
import {
  LoginInitialValue,
  LoginSchema,
} from "../ValidationSchema/LoginSchema";
import ShowError from "../Common/ShowError";
import { HOST_URL } from "../../API/Host";
import GoogleLogin from "react-google-login";
import axios from "axios";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onLogin = (payload) => {
    setLoading(true);
    axios
      .post(`${HOST_URL}/login`, payload)
      .then((res) => res)
      .then((response) => {
        if (response.data.success === true) {
          localStorage.setItem("token", response.data.token);
          navigate("/home");
          setLoading(false);
        } else {
          toast.error("Please enter your valid email and password", {
            theme: "colored",
            autoClose: 1000,
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.warn("Server is not running", {
          theme: "colored",
          autoClose: 2000,
        });
      });
  };

  const clientID =
    "632374650147-qgk47m10ks6td9r45j3q6fgnat8ncc6s.apps.googleusercontent.com";
  // LOGIN WITH GOOGLE
  const LoginWithGoogle = async (data) => {};
  const errorMessage = (error) => {};

  return (
    <div>
      <div className="row mx-0">
        <div className="col RegisterLeftStyle">
          <h5 className="text-center my-5 text-info">LOGIN WITH US</h5>
        </div>
        <div className="col RegisterLeftRight">
          <div className="text-center text-info my-4">
            <FaLock size={30} />
            <h4>LOGIN</h4>
          </div>
          <Formik
            initialValues={LoginInitialValue}
            validationSchema={LoginSchema}
            onSubmit={(payload) => onLogin(payload)}
          >
            <Form>
              <div className="my-2">
                <b>
                  Email Address <span className="text-danger"> *</span>
                </b>
                <Field
                  placeholder="Email Address"
                  name="email"
                  className="GInput"
                />
                <ShowError name="email" />
              </div>
              <div className="my-2">
                <b>
                  Password <span className="text-danger"> *</span>
                </b>
                <div className="d-flex">
                  <Field
                    type={passwordShown ? "text" : "password"}
                    placeholder="Password"
                    className="GInput"
                    name="password"
                  />
                  <span className="border-bottom">
                    {passwordShown ? (
                      <FaRegEye
                        size={20}
                        cursor="pointer"
                        onClick={togglePassword}
                        style={{ marginTop: 15 }}
                      />
                    ) : (
                      <FaRegEyeSlash
                        size={20}
                        cursor="pointer"
                        onClick={togglePassword}
                        style={{ marginTop: 15 }}
                      />
                    )}
                  </span>
                </div>
                <ShowError name="password" />
              </div>
              <div className="d-flex justify-content-end mx-2 my-3">
                <button type="submit" className="CButton">
                  {loading ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="sr-only">LOGIN</span>
                  )}
                </button>
              </div>
            </Form>
          </Formik>
          <hr className="mx-4" />
          <div className="text-center">
            <Link to="/forget/password" className="forgotPassStyle">
              Reset Password
            </Link>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <GoogleLogin
              clientId={clientID}
              clientSecret="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"
              buttonText="Login With Google Account"
              onSuccess={LoginWithGoogle}
              onError={errorMessage}
            />
          </div>
        </div>
      </div>
      <div className="footerStyle">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
