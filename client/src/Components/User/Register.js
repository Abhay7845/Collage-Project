import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import "../../Form/user/Register.css";
import "../../App.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = async () => {
    let result = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result.massage);
  };
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
              placeholder="Enter Full Name"
              // autoComplete="off"
              className="GInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-2">
            <b>
              Email Address <span className="text-danger"> *</span>
            </b>
            <input
              type="text"
              placeholder="Email Address"
              // autoComplete="off"
              className="GInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-2">
            <b>
              Set Password <span className="text-danger"> *</span>
            </b>
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Enter Password"
              // autoComplete="off"
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
            <button type="submit" className="GButton" onClick={onSubmit}>
              REGISTER
            </button>
          </div>
          <div className="text-center">
            <Link to="/login" className=" text-info">
              If you have account? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
