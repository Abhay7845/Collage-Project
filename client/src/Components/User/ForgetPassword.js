import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import ShowError from "../Common/ShowError";
import "../Style/Forgot.css";
import { FaLockOpen, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {
  forgotSchema,
  ForgotInitialValue,
} from "../ValidationSchema/ForgotSchema";

const ForgetPassword = () => {
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [confirmPasswordShown, setConPasswordShown] = useState(false);
  const newPassword = () => {
    setNewPasswordShown(!newPasswordShown);
  };
  const conPasswordShown = () => {
    setConPasswordShown(!confirmPasswordShown);
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
                <div className="d-flex">
                  <Field
                    type={newPasswordShown ? "text" : "password"}
                    placeholder="New Password"
                    className="GInput"
                    name="newPassword"
                  />
                  <span className="border-bottom">
                    {newPasswordShown ? (
                      <FaRegEye
                        size={20}
                        cursor="pointer"
                        onClick={newPassword}
                        style={{ marginTop: 15 }}
                      />
                    ) : (
                      <FaRegEyeSlash
                        size={20}
                        cursor="pointer"
                        onClick={newPassword}
                        style={{ marginTop: 15 }}
                      />
                    )}
                  </span>
                </div>
                <ShowError name="newPassword" />
              </div>
              <div className="my-2">
                <b>
                  Confirm Password <span className="text-danger"> *</span>
                </b>
                <div className="d-flex">
                  <Field
                    type={confirmPasswordShown ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="GInput"
                    name="conPassword"
                  />
                  <span className="border-bottom">
                    {confirmPasswordShown ? (
                      <FaRegEye
                        size={20}
                        cursor="pointer"
                        onClick={conPasswordShown}
                        style={{ marginTop: 15 }}
                      />
                    ) : (
                      <FaRegEyeSlash
                        size={20}
                        cursor="pointer"
                        onClick={conPasswordShown}
                        style={{ marginTop: 15 }}
                      />
                    )}
                  </span>
                </div>
                <ShowError name="conPassword" />
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
