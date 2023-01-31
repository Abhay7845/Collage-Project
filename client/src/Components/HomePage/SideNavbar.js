import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import image from "../../Asset/img/a_logo.png";

import "../Style/SideBar.css";
import { ProfileAPI } from "../../Redux/APICall/ProfileAPI";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  const [theme, setTheme] = useState("light-theme");
  let navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  let location = useLocation();
  useEffect(() => {}, [location]);

  const ChangeTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [userInfo, setUserinfo] = useState({});
  const userAccessToken = localStorage.getItem("token");
  useEffect(() => {
    ProfileAPI().then((res) => setUserinfo(res.data.data));
  }, [userAccessToken]);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          theme === "light-theme" ? "bg-info" : "bg-primary"
        }`}
      >
        <div className="p-1 w-100" style={{ marginTop: "-8px" }}>
          <div className="d-flex justify-content-between">
            <Icon.TextLeft
              onClick={ToggleSidebar}
              size={30}
              className="text-light mt-1 mx-2"
              cursor="pointer"
            />
            <Link className="navbar-brand" to="/home">
              <img src={image} alt="aryan" width={33} />
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={`sidebar 
     ${theme === "light-theme" ? "bg-info" : "bg-primary"}
      ${isOpen === true ? "active" : ""}`}
      >
        <div className="sd-header">
          {!userAccessToken ? (
            <img src={image} alt="img" className="mx-5" width={33} />
          ) : (
            <b className="my-1 mx-2 text-light">
              {userInfo === undefined ? (
                <img src={image} alt="img" className="mx-5" width={33} />
              ) : (
                <b>Welcome: {userInfo.name}</b>
              )}
            </b>
          )}
          <Icon.ArrowLeft
            onClick={ToggleSidebar}
            size={25}
            className="text-light mt-1"
            cursor="pointer"
          />
        </div>
        <div className="sd-body">
          <ul className="mx-2">
            {localStorage.getItem("token") ? (
              <>
                <li>
                  <Link
                    className="sd-link"
                    to="/product"
                    onClick={ToggleSidebar}
                  >
                    PRODUCTS
                    <Icon.ArrowRight className="mx-2" />
                  </Link>
                </li>
                <li>
                  <Link className="sd-link" to="/user" onClick={ToggleSidebar}>
                    USER
                    <Icon.ArrowRight className="mx-2" />
                  </Link>
                </li>
                <li>
                  <Link className="sd-link" to="/about" onClick={ToggleSidebar}>
                    ABOUT
                    <Icon.ArrowRight className="mx-2" />
                  </Link>
                </li>
                <li>
                  <Link
                    className={`nav-link  ${
                      location.pathname === "/profile" ? "active" : ""
                    }`}
                    to="/profile"
                    onClick={ToggleSidebar}
                  >
                    <FaUser size={25} className="text-light" />
                    <Icon.ArrowRight className="mx-2 text-light" />
                  </Link>
                </li>
                <li>
                  <Link
                    className={`nav-link text-light ${
                      location.pathname === "/translate" ? "active" : ""
                    }`}
                    to="/translate"
                    onClick={ToggleSidebar}
                  >
                    <Icon.Translate size={22} cursor="pointer" />
                    <Icon.ArrowRight className="mx-2" />
                  </Link>
                </li>
                <li onClick={ToggleSidebar}>
                  <b className="logoutBtn" onClick={LogOut}>
                    LOGOUT
                  </b>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="nav-link"
                    to="/register"
                    onClick={ToggleSidebar}
                  >
                    <button className="registerLoginButton">SIGNUP</button>
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={ToggleSidebar}
                  >
                    <button className="registerLoginButton">LOGIN</button>
                  </Link>
                </li>
              </>
            )}
            <li>
              <Icon.SunFill
                className="my-1 lightDark mx-1"
                size={22}
                cursor="pointer"
                onClick={ChangeTheme}
                color={theme === "light-theme" ? "#ffff" : "#000"}
              />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
        onClick={ToggleSidebar}
      />
    </>
  );
};

export default SideNavbar;
