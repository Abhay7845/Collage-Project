/** @format */

import React, { useState, useEffect } from "react";
import { FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "../Style/RegisterLogin.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../HomePage/Footer";
import { Form, Formik, Field } from "formik";
import {
  LoginInitialValue,
  LoginSchema,
} from "../ValidationSchema/LoginSchema";
import ShowError from "../Common/ShowError";
import { HOST_URL } from "../../API/Host";

const Login = (props) => {
  const { showAlert } = props;
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const LoginTime = localStorage.getItem("loginTime");

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    const currentTime = new Date().getTime();
    if (currentTime < LoginTime) {
      navigate("/theAryan/group/home");
    } else {
      navigate("/theAryan/group/login");
    }
  }, [LoginTime, navigate]);

  const onLogin = async (payload) => {
    setLoading(true);
    const { email, password } = payload;
    const response = await fetch(`${HOST_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.success === true) {
      const loginTime = new Date(data.loginTime).getTime();
      localStorage.setItem("token", data.token);
      localStorage.setItem("loginTime", loginTime);
      navigate("/theAryan/group/home");
      setLoading(false);
    } else {
      showAlert("Please enter your valid email and password", "danger");
      setLoading(false);
    }
  };
  return (
    <div>
      <div className='row mx-0'>
        <div className='col RegisterLeftStyle'>
          <h5 className='text-center my-5 text-info'>LOGIN WITH US</h5>
        </div>
        <div className='col RegisterLeftRight'>
          <div className='text-center text-info my-4'>
            <FaLock size={30} />
            <h4>LOGIN</h4>
          </div>
          <Formik
            initialValues={LoginInitialValue}
            validationSchema={LoginSchema}
            onSubmit={(payload) => onLogin(payload)}>
            <Form>
              <div className='my-2'>
                <b>
                  Email Address <span className='text-danger'> *</span>
                </b>
                <Field
                  placeholder='Email Address'
                  name='email'
                  className='GInput'
                />
                <ShowError name='email' />
              </div>
              <div className='my-2'>
                <b>
                  Password <span className='text-danger'> *</span>
                </b>
                <div className='d-flex'>
                  <Field
                    type={passwordShown ? "text" : "password"}
                    placeholder='Password'
                    className='GInput'
                    name='password'
                  />
                  <span className='border-bottom'>
                    {passwordShown ? (
                      <FaRegEye
                        size={20}
                        cursor='pointer'
                        onClick={togglePassword}
                        style={{ marginTop: 15 }}
                      />
                    ) : (
                      <FaRegEyeSlash
                        size={20}
                        cursor='pointer'
                        onClick={togglePassword}
                        style={{ marginTop: 15 }}
                      />
                    )}
                  </span>
                </div>
                <ShowError name='password' />
              </div>
              <div className='d-flex justify-content-end mx-2 my-3'>
                <button type='submit' className='CButton'>
                  {loading ? (
                    <span
                      className='spinner-border spinner-border-sm'
                      role='status'
                      aria-hidden='true'
                    />
                  ) : (
                    <span className='sr-only'>LOGIN</span>
                  )}
                </button>
              </div>
            </Form>
          </Formik>
          <hr className='mx-4' />
          <div className='text-center'>
            <Link
              to='/theAryan/group/forget/password'
              className='forgotPassStyle'>
              Forget Password
            </Link>
          </div>
        </div>
      </div>
      <div className='footerStyle'>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
