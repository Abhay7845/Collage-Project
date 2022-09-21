import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import ShowError from "../Common/ShowError";
import "../Style/Forgot.css";
import { FaLockOpen } from "react-icons/fa";
import {
  forgotSchema,
  ForgotInitialValue,
} from "../ValidationSchema/ForgotSchema";

const ForgetPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const onForgot = (payload) => {
    const { email, newPassword, conPassword } = payload;
    console.log("Data==>", email, newPassword, conPassword);
  };
  return (
    <>
      <div className="container my-5 d-flex-justify-content-center">
        <div className="container forgotFormStyle">
          <div className="text-center text-info my-4">
            <FaLockOpen size={30} />
            <h4>FORGET PASSWORD</h4>
          </div>
          <Formik
            initialValues={ForgotInitialValue}
            validationSchema={forgotSchema}
            onSubmit={(payload) => onForgot(payload)}
          >
            <Form>
              <div className="my-2">
                <b>
                  Registered Email <span className="text-danger"> *</span>
                </b>
                <Field placeholder="Email" name="email" className="GInput" />
                <ShowError name="email" />
              </div>
              <div className="my-2">
                <b>
                  New Password <span className="text-danger"> *</span>
                </b>
                <Field
                  type={passwordShown ? "text" : "password"}
                  placeholder="New Password"
                  className="GInput"
                  name="newPassword"
                />
                <ShowError name="newPassword" />
              </div>
              <div className="my-2">
                <b>
                  Confirm Password <span className="text-danger"> *</span>
                </b>
                <Field
                  type={passwordShown ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="GInput"
                  name="conPassword"
                />
                <ShowError name="conPassword" />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={togglePassword}
                />
                <span className="text-info">Show Password</span>
              </div>
              <div className="d-flex justify-content-end my-4 mx-2">
                <button type="submit" className="CButton">
                  NEXT
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
