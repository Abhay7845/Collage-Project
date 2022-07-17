import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaLock } from "react-icons/fa";
import { RegisterSchema } from "../../formValidation/Register";
import "../../Form/user/Register.css";
import "../../App.css";
import Error from "../../formValidation/Error";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const initialValue = {
    email: "",
    password: "",
  };

  return (
    <>
      <div className="row mx-0">
        <div className="col RegisterLeftStyle">
          <h5 className="text-center my-5 text-info">LOGIN WITH US</h5>
        </div>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          <Form className="col RegisterLeftRight">
            <div className="text-center text-info my-5">
              <FaLock size={30} />
              <h4>LOGIN</h4>
            </div>
            <div className="my-2">
              <b>
                Email Address <span className="text-danger"> *</span>
              </b>
              <Field
                placeholder="Email Address"
                name="email"
                autocomplete="off"
                className="GInput"
              />
              <Error name="email" />
            </div>
            <div className="my-2">
              <b>
                Set Password <span className="text-danger"> *</span>
              </b>
              <Field
                type={passwordShown ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                autocomplete="off"
                className="GInput"
                onClick={togglePassword}
              />
              <Error name="password" />
            </div>

            <div className="d-flex justify-content-end my-4">
              <button type="submit" className="btn  btn-outline-info btn-sm">
                LOGIN
              </button>
            </div>
            <div className="text-center">
              <Link to="/register" className=" text-info">
                Don't have an account? SignUp
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
