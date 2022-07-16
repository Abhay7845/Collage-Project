import React from "react";
import { Input } from "antd";
import { Country } from "country-state-city";
import "../Form/user/Register.css";
import "../App.css";

const Register = () => {
  const country = Country.getAllCountries();

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
        <div className="col RegisterLeftRight">
          <h4 className="text-center text-info my-4">REGISTER</h4>
          <div className="my-2">
            <b>
              Full Name <span className="text-danger"> *</span>
            </b>
            <Input placeholder="Enter Full Name" className="GInput" />
          </div>
          <div className="my-2">
            <b>
              Email Address <span className="text-danger"> *</span>
            </b>
            <Input placeholder="Email Address" className="GInput" />{" "}
          </div>
          <div className="my-2">
            <b>
              Set Password <span className="text-danger"> *</span>
            </b>
            <Input placeholder="Enter Password" className="GInput" />
          </div>
          <div className="my-2">
            <b>Country </b>
            <select className="GSelect">
              <option>Select your Country</option>
              {country.map((countryName, i) => {
                return (
                  <option key={i} value={country.name}>
                    {countryName.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="d-flex justify-content-end my-4">
            <button className="btn btn-outline-info">REGISTER</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
