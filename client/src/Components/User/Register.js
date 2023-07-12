import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import "../Style/RegisterLogin.css";
import "../../App.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Footer from "../HomePage/Footer";
import { Field, Form, Formik } from "formik";
import ShowError from "../Common/ShowError";
import {
  RegisterInitialValue,
  RegisterSchema,
} from "../ValidationSchema/RegisterSchema";
import { Headers } from "../../API/Host";

const Register = (props) => {
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const { headers } = Headers;

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = async (payload) => {
    setLoading(true);
    const { name, email, phone, password } = payload;
    let result = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, password }),
      headers: headers,
    });
    result = await result.json();
    if (result.success) {
      localStorage.setItem("token", result.token);
      props.showAlert("Your Account created Successfully", "success");
      navigate("/theAryan/group/home");
      setLoading(false);
    }
    if (result.success === false) {
      props.showAlert("Email is Already Registered", "danger");
      setLoading(false);
    }
    if (result.errors) {
      props.showAlert("Please enter your Correct Details", "danger");
      setLoading(false);
    }
  };

  return (
    <>
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
    </>
  );
};

export default Register;
