/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { occupationData } from "./UserListData";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { HOST_URL } from "../../API/Host";
import AppLoader from "../Common/AppLoader";

const UpdateUser = (props) => {
  const { showAlert } = props;
  const userAccessToken = localStorage.getItem("token");
  const { id } = useParams();
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
  const [selectedState, setSelectedState] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [addedUser, setAddedUser] = useState({});
  const navigate = useNavigate();

  const countryName = Country.getAllCountries();
  const handleCountryCode = (e) => {
    const countryCode = !e ? addedUser.country : e.target.value;
    setCountry(countryCode);
    const getState = State.getAllStates().filter(
      (state) => state.countryCode === countryCode
    );
    setSelectedState(getState);
  };
  useEffect(() => {
    handleCountryCode();
  }, [addedUser.country]);

  const handleStateCode = (e) => {
    const stateCode = !e ? addedUser.state : e.target.value;
    setState(stateCode);
    const getCity = City.getAllCities().filter(
      (city) => city.stateCode === stateCode
    );
    setSelectedCity(getCity);
  };

  useEffect(() => {
    handleStateCode();
  }, [addedUser.state]);

  const UpdateUserDetails = () => {
    setLoading(true);
    const updateinput = {
      name: !name ? addedUser.name : name,
      occupation: !occupation ? addedUser.occupation : occupation,
      email: !email ? addedUser.email : email,
      phone: !phone ? addedUser.phone : phone,
      country: !country ? addedUser.country : country,
      state: !state ? addedUser.state : state,
      city: !city ? addedUser.city : city,
      postalCode: !postalCode ? addedUser.postalCode : postalCode,
      address: !address ? addedUser.address : address,
    };
    axios
      .put(`${HOST_URL}/update/user/${id}`, updateinput, {
        headers: {
          "Content-Type": "application/json",
          Authorization: userAccessToken,
        },
      })
      .then((res) => res)
      .then((response) => {
        if (response.data.success === true) {
          showAlert("Data has been Updated successfully", "success");
          navigate("/user");
        }
        if (response.data.success === false) {
          showAlert("Select Country, State, District", "danger");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("error==>", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HOST_URL}/fetch/AddUser/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res)
      .then((result) => {
        if (result.data.success === true) {
          setAddedUser(result.data.AddedUser);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("error==>", error);
        setLoading(false);
      });
  }, [id]);

  console.log("addedUser==>", addedUser);

  return (
    <div>
      {loading === true && <AppLoader />}
      <div className="container my-5">
        <h4 className="text-center text-info">UPDATE YOUR DETAILS</h4>
        <div className="row">
          <div className="col-md my-2">
            <b>
              Name <span className="text-danger"> *</span>
            </b>
            <input
              type="text"
              className="GInput"
              placeholder="Name"
              defaultValue={addedUser.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md my-2">
            <b>
              Occupation <span className="text-danger"> *</span>
            </b>
            <select
              className="GSelect"
              onChange={(e) => setOccupation(e.target.value)}
              value={!occupation ? addedUser.occupation : occupation}
            >
              <option value="">Select</option>
              {occupationData.map((item, i) => {
                return (
                  <option key={i} value={item.name}>
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
              type="email"
              className="GInput"
              placeholder="Email address"
              defaultValue={addedUser.email}
              onChange={(e) => setEmail(e.target.value || addedUser.email)}
            />
          </div>
          <div className="col-md my-2">
            <b>
              Phone Number <span className="text-danger"> *</span>
            </b>
            <input
              type="text"
              className="GInput"
              maxLength={10}
              placeholder="Phone Number"
              defaultValue={addedUser.phone}
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
              onChange={(e) => handleCountryCode(e)}
              value={!country ? addedUser.country : country}
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
              onChange={(e) => handleStateCode(e)}
              value={!state ? addedUser.state : state}
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
              onChange={(e) => setCity(e.target.value)}
              value={!city ? addedUser.city : city}
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
              maxLength={6}
              className="GInput"
              placeholder="Pin Code"
              defaultValue={addedUser.postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className=" my-2">
            <b>
              Address <span className="text-danger"> *</span>
            </b>
            <textarea
              className="GTextArea"
              placeholder="Address"
              defaultValue={addedUser.address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <Link to="/user">
            <button className="CButton">GO BACK</button>
          </Link>
          <button type="submit" className="CButton" onClick={UpdateUserDetails}>
            {loading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              <span className="sr-only">UPDATE</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
