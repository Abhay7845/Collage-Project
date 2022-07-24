import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaHome } from "react-icons/fa";

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
          <Link className="navbar-brand" to="/home">
            <FaHome size={30} color="#fff" />
          </Link>
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
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  USER
                </Link>
              </li>
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
                    <FaUserCircle size={30} color="gray" />
                  </Link>
                  <button
                    onClick={LogOut}
                    className="btn btn-outline-light btn-sm"
                  >
                    LOGOUT
                  </button>
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
