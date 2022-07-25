import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import "../../Components/User/CssStyle/RegisterLogin.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Footer from "../HomePage/Footer";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    // console.log("data = ", data);
    if (data.success === true) {
      localStorage.setItem("token", data.AuthToken);
      props.showAlert("Logged in Successfully", "success");
      navigate("/home");
    } else {
      props.showAlert("Please enter your valid email and password", "danger");
    }
  };
  return (
    <>
      <div className="row mx-0">
        <div className="col RegisterLeftStyle">
          <h5 className="text-center my-5 text-info">LOGIN WITH US</h5>
        </div>
        <div className="col RegisterLeftRight">
          <div className="text-center text-info my-5">
            <FaLock size={30} />
            <h4>LOGIN</h4>
          </div>
          <div className="my-2">
            <b>
              Email Address <span className="text-danger"> *</span>
            </b>
            <input
              placeholder="Email Address"
              name="email"
              // autoComplete="off"
              className="GInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-2">
            <b>
              Password <span className="text-danger"> *</span>
            </b>
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
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
            <button
              type="submit"
              className="btn btn-outline-info"
              onClick={login}
            >
              LOGIN
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

export default Login;
