/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import "../Style/RegisterLogin.css";
import "../../App.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import Footer from "../HomePage/Footer";
import { Field, Form, Formik } from "formik";
import ShowError from "../Common/ShowError";
import {
  RegisterInitialValue,
  RegisterSchema,
} from "../ValidationSchema/RegisterSchema";
import { HOST_URL } from "../../API/Host";
import axios from "axios";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = (payload) => {
    setLoading(true);
    axios
      .post(`${HOST_URL}/register`, payload)
      .then((res) => res)
      .then((response) => {
        if (response.data.success === true) {
          localStorage.setItem("token", response.data.token);
          toast.success("Your Account created Successfully", {
            theme: "colored",
            autoClose: 2000,
          });
          navigate("/home");
          setLoading(false);
        }
        if (response.data.success === false) {
          toast.error("Email is Already Registered", {
            theme: "colored",
            autoClose: 3000,
          });
          setLoading(false);
        }
        if (response.data.errors) {
          toast.error("Please enter your Correct Details", {
            theme: "colored",
            autoClose: 3000,
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.warn("Server is not running", {
          theme: "colored",
          autoClose: 2000,
        });
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="row mx-0">
        <div className="col RegisterLeftStyle">
          <h5 className="text-center my-5 text-info">REGISTER WITH US</h5>
        </div>
        <div className="col RegisterLeftRight">
          <div className="text-center text-info my-4">
            <FaUserAlt size={30} />
            <h4>REGISTER</h4>
          </div>
          <Formik
            initialValues={RegisterInitialValue}
            validationSchema={RegisterSchema}
            onSubmit={(payload) => onSubmit(payload)}
          >
            <Form>
              <div>
                <b>
                  Full Name<span className="text-danger"> *</span>
                </b>
                <Field placeholder="Full NAME" name="name" className="GInput" />
                <ShowError name="name" />
              </div>
              <div className="my-2">
                <b>
                  Email<span className="text-danger"> *</span>
                </b>
                <Field placeholder="Email" name="email" className="GInput" />
                <ShowError name="email" />
              </div>
              <div className="my-2">
                <b>
                  Phone Number<span className="text-danger"> *</span>
                </b>
                <Field
                  placeholder="Phone Number"
                  name="phone"
                  className="GInput"
                />
                <ShowError name="phone" />
              </div>
              <div className="my-2">
                <b>
                  Set Password <span className="text-danger"> *</span>
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
                        style={{
                          marginTop: 15,
                        }}
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
                    <span className="sr-only">REGISTER</span>
                  )}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="footerStyle">
        <Footer />
      </div>
    </div>
  );
};

export default Register;
