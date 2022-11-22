import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { FaUser, FaDashcube } from "react-icons/fa";
import "./HomePage.css";

const Navbar = () => {
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

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          theme === "light-theme" ? "bg-info" : "bg-primary"
        }`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!localStorage.getItem("token") ? (
                <li className="nav-item">
                  <Link className="navbar-brand" to="/home">
                    <FaDashcube size={30} color="#fff" />
                  </Link>
                </li>
              ) : (
                <>
                  <Link
                    className={`nav-link NavbarList ${
                      location.pathname === "/home" ? "active" : ""
                    }`}
                    to="/home"
                  >
                    <FaDashcube size={30} />
                  </Link>
                  <Link
                    className={`nav-link NavbarList ${
                      location.pathname === "/user" ? "active" : ""
                    }`}
                    to="/user"
                  >
                    USER
                  </Link>
                  <Link
                    className={`nav-link NavbarList ${
                      location.pathname === "/product" ? "active" : ""
                    }`}
                    to="/product"
                  >
                    PRODUCTS
                  </Link>
                  <Link
                    className={`nav-link NavbarList ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    to="/about"
                  >
                    ABOUT
                  </Link>
                </>
              )}
            </ul>

            <form className="d-flex">
              <Link
                className={`nav-link NavbarList ${
                  location.pathname === "/translate" ? "active" : ""
                }`}
                to="/translate"
              >
                <Icon.Translate
                  className="my-1  mx-3 my-1"
                  size={22}
                  cursor="pointer"
                />
              </Link>
              <Icon.SunFill
                className="my-1 lightDark mx-1"
                size={22}
                cursor="pointer"
                onClick={ChangeTheme}
                color={theme === "light-theme" ? "#ffff" : "#000"}
              />
              {!localStorage.getItem("token") ? (
                <>
                  <Link className="nav-link" to="/login">
                    <button className="registerLoginButton mx-2">
                      LOGIN
                    </button>
                  </Link>
                  <Link className="nav-link" to="/register">
                    <button className="registerLoginButton">
                      REGISTER
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className={`nav-link mx-2 ${
                      location.pathname === "/profile" ? "active" : ""
                    }`}
                    to="/profile"
                  >
                    <FaUser
                      size={25}
                      color={`${
                        location.pathname === "/profile" ? "black" : "white"
                      }`}
                      className="mx-2"
                    />
                  </Link>
                  <b className="logoutBtn" onClick={LogOut}>
                    LOGOUT
                  </b>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
