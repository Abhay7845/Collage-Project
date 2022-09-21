import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import "../../Components/User/CssStyle/RegisterLogin.css";
import "../../App.css";
import Footer from "../HomePage/Footer";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const navigate = useNavigate();
  const onSubmit = async () => {
    let result = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.success) {
      localStorage.setItem("token", result.AuthToken);
      props.showAlert("Your Account Successfully created", "success");
      navigate("/home");
    }
    if (result.success === false) {
      props.showAlert("Email is Already Registered", "danger");
    }
    if (result.success === null) {
      props.showAlert("Please enter your Correct Details", "danger");
    }
  };
  useEffect(() => {
    const AuthToken = localStorage.getItem("token");
    if (AuthToken) {
      navigate("/user");
    }
  });
  return (
    <>
      <div className="row mx-0">
        <div className="col RegisterLeftStyle">
          <h5 className="text-center my-5 text-info">REGISTER WITH US</h5>
        </div>
        <div className="col RegisterLeftRight">
          <div className="text-center text-info my-5">
            <FaUserAlt size={30} />
            <h4>REGISTER</h4>
          </div>
          <div className="my-2">
            <b>
              Full Name <span className="text-danger"> *</span>
            </b>
            <input
              type="text"
              placeholder="Full Name"
              className="GInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="text-danger"></span>
          </div>
          <div className="my-2">
            <b>
              Email Address <span className="text-danger"> *</span>
            </b>
            <input
              type="text"
              placeholder="Email Address"
              className="GInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-2">
            <b>
              Phone Number <span className="text-danger"> *</span>
            </b>
            <input
              type="text"
              placeholder="Phone Number"
              className="GInput"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="my-2">
            <b>
              Set Password <span className="text-danger"> *</span>
            </b>
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Set Password"
              className="GInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={togglePassword}
            />
            <span className="text-info">Show Password</span>
          </div>
          <div className="d-flex justify-content-end my-4">
            <button type="submit" className="CButton" onClick={onSubmit}>
              REGISTER
            </button>
          </div>
        </div>
      </div>
      <div className="footerStyle">
        <Footer />
      </div>
    </>
  );
};

export default Register;
