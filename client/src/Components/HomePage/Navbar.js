/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ProfileAPI } from "../../Redux/APICall/ProfileAPI";
import * as Icon from "react-bootstrap-icons";
import image from "../../Asset/img/a_logo.png";
import "../Style/HomePage.css";
import Tippy from "@tippyjs/react";

const Navbar = () => {
  const [theme, setTheme] = useState("light-theme");
  let navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("token");
    navigate("/theAryan/group/login");
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
    <div>
      <nav
        className={`navbar navbar-expand-lg ${
          theme === "light-theme" ? "bg-info" : "bg-primary"
        }`}>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-lg-0'>
              {!localStorage.getItem("token") ? (
                <li className='nav-item'>
                  <Link className='navbar-brand' to='/theAryan/group/home'>
                    <img src={image} alt='aryan' width={36} />
                  </Link>
                </li>
              ) : (
                <div>
                  <Link
                    className={`nav-link NavbarList ${
                      location.pathname === "/theAryan/group/home"
                        ? "active"
                        : ""
                    }`}
                    to='/theAryan/group/home'>
                    <img src={image} alt='aryan' width={36} />
                  </Link>
                  <Link
                    className={`nav-link NavbarList ${
                      location.pathname === "/theAryan/group/user"
                        ? "active"
                        : ""
                    }`}
                    to='/theAryan/group/user'>
                    USER
                  </Link>
                  <Link
                    className={`nav-link NavbarList ${
                      location.pathname === "/theAryan/group/product"
                        ? "active"
                        : ""
                    }`}
                    to='/theAryan/group/product'>
                    PRODUCTS
                  </Link>
                  <Link
                    className={`nav-link NavbarList ${
                      location.pathname === "/theAryan/group/about"
                        ? "active"
                        : ""
                    }`}
                    to='/theAryan/group/about'>
                    ABOUT
                  </Link>
                </div>
              )}
            </ul>
            <form className='d-flex'>
              <Link
                className={`nav-link NavbarList ${
                  location.pathname === "/theAryan/group/translate"
                    ? "active"
                    : ""
                }`}
                to='/theAryan/group/translate'>
                <Icon.Translate
                  className='my-1 mx-2'
                  size={22}
                  cursor='pointer'
                />
              </Link>
              <Icon.SunFill
                className='my-1 lightDark mx-2'
                size={22}
                cursor='pointer'
                onClick={ChangeTheme}
                color={theme === "light-theme" ? "#ffff" : "#000"}
              />
              {!localStorage.getItem("token") ? (
                <div>
                  <Link className='nav-link' to='/theAryan/group/login'>
                    <button className='registerLoginButton mx-2'>LOGIN</button>
                  </Link>
                  <Link className='nav-link' to='/theAryan/group/register'>
                    <button className='registerLoginButton'>REGISTER</button>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to='/theAryan/group/profile'>
                    <Tippy
                      content={userInfo === undefined ? "" : userInfo.name}>
                      <Icon.PersonCircle
                        size={20}
                        className='text-secondary'
                        style={{ outline: "none" }}
                      />
                    </Tippy>
                  </Link>
                  <b className='logoutBtn mx-3' onClick={LogOut}>
                    <Tippy content='LOG OUT'>
                      <Icon.ArrowRightCircleFill size={20} />
                    </Tippy>
                  </b>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
