import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaUserAlt } from "react-icons/fa";
import { RegisterSchema } from "../formValidation/Register";
import { Country } from "country-state-city";
import "../Form/user/Register.css";
import "../App.css";
import Error from "../formValidation/Error";

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const country = Country.getAllCountries();
  const initialValue = {
    fullName: "",
    email: "",
    password: "",
  };

  return (
    <>
      <div className="row mx-0">
        <div className="col RegisterLeftStyle">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
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
              <FaUserAlt size={30} />
              <h4>REGISTER</h4>
            </div>
            <div className="my-2">
              <b>
                Full Name <span className="text-danger"> *</span>
              </b>
              <Field
                placeholder="Enter Full Name"
                name="fullName"
                className="GInput"
              />
              <Error name="fullName" />
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
            <div className="my-2">
              <b>Country </b>
              <Field className="GSelect" as="select" name="country">
                <option>Select your Country</option>
                {country.map((countryName, i) => {
                  return <option key={i}>{countryName.name}</option>;
                })}
              </Field>
            </div>
            <div className="d-flex justify-content-end my-4">
              <button type="submit" className="btn  btn-outline-info btn-sm">
                REGISTER
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Register;
