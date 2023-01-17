import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import "../../Components/User/CssStyle/RegisterLogin.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../HomePage/Footer";
import { Form, Formik, Field } from "formik";
import {
  LoginInitialValue,
  LoginSchema,
} from "../ValidationSchema/LoginSchema";
import ShowError from "../Common/ShowError";

const Login = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const navigate = useNavigate();

  const onLogin = async (payload) => {
    setLoading(true);
    const { email, password } = payload;
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.success === true) {
      localStorage.setItem("token", data.token);
      props.showAlert("Logged in Successfully", "success");
      navigate("/home");
      setLoading(true);
    } else {
      props.showAlert("Please enter your valid email and password", "danger");
      setLoading(false);
    }
  };
  return (
    <>
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
                  Set Password <span className="text-danger"> *</span>
                </b>
                <Field
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  className="GInput"
                  name="password"
                />
                <ShowError name="password" />
              </div>

              <div className="d-flex justify-content-between mx-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onClick={togglePassword}
                  />
                  <span className="text-info">Show Password</span>
                </div>
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
              Forget Password
            </Link>
          </div>
        </div>
      </div>
      <div className="footerStyle">
        <Footer />
      </div>
    </>
  );
};

export default Login;
