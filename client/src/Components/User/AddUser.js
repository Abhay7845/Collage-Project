import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import { occupation } from "./UserListData";

const AddUser = () => {
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const countryName = Country.getAllCountries();
  const handleCountryCode = (e) => {
    const countryCode = e.target.value;
    const getState = State.getAllStates().filter(
      (state) => state.countryCode === countryCode,
    );
    setState(getState);
  };

  const handleStateCode = (e) => {
    const stateCode = e.target.value;
    const getCity = City.getAllCities().filter(
      (city) => city.stateCode === stateCode,
    );
    setCity(getCity);
  };
  return (
    <>
      <div className="container my-5">
        <h4 className="text-center text-info"> ADD USER</h4>
        <div className="row">
          <div className="col-md my-2">
            <b>
              Name <span className="text-danger"> *</span>
            </b>
            <input type="text" className="GInput" placeholder="Name" />
          </div>
          <div className="col-md my-2">
            <b>
              Occupation <span className="text-danger"> *</span>
            </b>
            <select className="GSelect">
              <option value="">Select Occupation</option>
              {occupation.map((item, i) => {
                return (
                  <option key={i} value={item.code}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md my-2">
            <b>
              Email Address <span className="text-danger"> *</span>
            </b>
            <input type="text" className="GInput" placeholder="Email address" />
          </div>
          <div className="col-md my-2">
            <b>
              Phone Number <span className="text-danger"> *</span>
            </b>
            <input type="text" className="GInput" placeholder="Phone Number" />
          </div>
        </div>
        <h6
          className="bg-info text-white text-center my-3"
          style={{ padding: "8px" }}
        >
          ADDRESS DETAILS
        </h6>
        <div className="row">
          <div className="col-md my-2">
            <b>
              Country <span className="text-danger"> *</span>
            </b>
            <select className="GSelect" onChange={(e) => handleCountryCode(e)}>
              <option value="">Select Country</option>
              {countryName.map((item, i) => {
                return (
                  <option key={i} value={item.isoCode}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md my-2">
            <b>
              State <span className="text-danger"> *</span>
            </b>
            <select className="GSelect" onChange={(e) => handleStateCode(e)}>
              <option value="">Select State</option>
              {state.map((item, i) => {
                return (
                  <option key={i} value={item.isoCode}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md my-2">
            <b>
              City <span className="text-danger"> *</span>
            </b>
            <select className="GSelect">
              <option value="">Select City</option>
              {city.map((item, i) => {
                return (
                  <option key={i} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md my-2">
            <b>
              Pin Code <span className="text-danger"> *</span>
            </b>
            <input type="text" className="GInput" placeholder="Pin Code" />
          </div>
          <div className=" my-2">
            <b>
              Address <span className="text-danger"> *</span>
            </b>
            <textarea
              type="text"
              className="GTextArea"
              rows={3}
              placeholder="Address"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end my-3">
          <button className="btn btn-info btn-sm">SUBMIT</button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
