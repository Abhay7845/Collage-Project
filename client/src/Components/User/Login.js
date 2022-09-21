import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import "../../Components/User/CssStyle/RegisterLogin.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../HomePage/Footer";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const navigate = useNavigate();

  const login = async (e) => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.success === true) {
      localStorage.setItem("token", data.AuthToken);
      props.showAlert("Logged in Successfully", "success");
      navigate("/home");
      setLoading(true);
    } else {
      props.showAlert("Please enter your valid email and password", "danger");
      setLoading(false);
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
              placeholder="Password"
              name="password"
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
            <button onClick={(e) => login()} className="CButton">
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                <span className="sr-only">LOGIN</span>
              )}
            </button>
          </div>
          <hr className="mx-4" />
          <div className="text-center">
            <Link to="/forget/password" className="forgotPassStyle">
              Forget Password
            </Link>
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
