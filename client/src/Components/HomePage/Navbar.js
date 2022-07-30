import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaDashcube } from "react-icons/fa";
import "./HomePage.css";

const Navbar = () => {
  let navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info ">
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
                    <FaHome size={30} color="#fff" />
                  </Link>
                </li>
              ) : (
                <>
                  <Link className="nav-link NavbarList" to="/home">
                    <FaDashcube size={30} />
                  </Link>
                  <Link className="nav-link NavbarList" to="/user">
                    USER
                  </Link>
                  <Link className="nav-link NavbarList" to="/product">
                    PRODUCTS
                  </Link>
                  <Link className="nav-link NavbarList" to="/about">
                    ABOUT
                  </Link>
                </>
              )}
            </ul>
            <form className="d-flex">
              {!localStorage.getItem("token") ? (
                <>
                  <Link className="nav-link" to="/login">
                    <button className="btn btn-outline-light btn-sm mx-2">
                      LOGIN
                    </button>
                  </Link>
                  <Link className="nav-link" to="/register">
                    <button className="btn btn-outline-light btn-sm">
                      REGISTER
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link mx-2" to="/profile">
                    <FaUser size={25} color="white" className="mx-2" />
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
