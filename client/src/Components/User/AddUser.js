import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import { occupationData } from "./UserListData";
import { Link, useNavigate } from "react-router-dom";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);

  const countryName = Country.getAllCountries();
  const handleCountryCode = (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);
    const getState = State.getAllStates().filter(
      (state) => state.countryCode === countryCode
    );
    setSelectedState(getState);
  };
  const userAccessToken = localStorage.getItem("token");
  const handleStateCode = (e) => {
    const stateCode = e.target.value;
    setState(stateCode);
    const getCity = City.getAllCities().filter(
      (city) => city.stateCode === stateCode
    );
    setSelectedCity(getCity);
  };
  const addUserInfo = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/api/user/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: userAccessToken,
      },
      body: JSON.stringify({
        name,
        occupation,
        email,
        phone,
        country,
        state,
        city,
        postalCode,
        address,
      }),
    });
    const data = await response.json();
    setLoading(false);
    if (data.success === false) {
      props.showAlert("Please fill the all Correct details", "danger");
    } else {
      navigate("/user");
    }
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
            <input
              type="text"
              className="GInput"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md my-2">
            <b>
              Occupation <span className="text-danger"> *</span>
            </b>
            <select
              className="GSelect"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            >
              <option value="">Select Occupation</option>
              {occupationData.map((item, i) => {
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
            <input
              type="text"
              className="GInput"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md my-2">
            <b>
              Phone Number <span className="text-danger"> *</span>
            </b>
            <input
              type="text"
              className="GInput"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
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
            <select
              className="GSelect"
              defaultValue={country}
              onChange={(e) => handleCountryCode(e)}
            >
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
            <select
              className="GSelect"
              value={state}
              onChange={(e) => handleStateCode(e)}
            >
              <option value="">Select State</option>
              {selectedState.map((item, i) => {
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
            <select
              className="GSelect"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select City</option>
              {selectedCity.map((item, i) => {
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
            <input
              type="text"
              className="GInput"
              placeholder="Pin Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <Link to="/user">
            <button className="CButton">GO BACK</button>
          </Link>
          <button onClick={addUserInfo} className="CButton">
            {loading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              <span className="sr-only">SUBMIT</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
