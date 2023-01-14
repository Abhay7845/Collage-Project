import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { FaDashcube } from "react-icons/fa";

import "../Style/SideBar.css";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="bg-info p-1 w-100" style={{ marginTop: "-8px" }}>
          <div className="d-flex justify-content-between">
            <Icon.TextLeft
              onClick={ToggleSidebar}
              size={30}
              className="text-light mt-1"
              cursor="pointer"
            />
            <Link className="navbar-brand" to="/home">
              <FaDashcube size={30} color="#fff" />
            </Link>
          </div>
        </div>
      </nav>
      <div className={`sidebar bg-info ${isOpen === true ? "active" : ""}`}>
        <div className="sd-header">
          <h6 className="text-light mt-3">ARYAN GROUP</h6>
          <Icon.ArrowLeft
            onClick={ToggleSidebar}
            size={25}
            className="text-light mt-1"
            cursor="pointer"
          />
        </div>
        <div className="sd-body">
          <ul>
            <li>
              <a className="sd-link" href="/">
                Menu Item 1
              </a>
            </li>
            <li>
              <a className="sd-link" href="/">
                Menu Item 2
              </a>
            </li>
            <li>
              <a className="sd-link" href="/">
                Menu Item 3
              </a>
            </li>
            <li>
              <a className="sd-link" href="/">
                Menu Item 4
              </a>
            </li>
            <li>
              <a className="sd-link" href="/">
                Menu Item 5
              </a>
            </li>
            <li>
              <a className="sd-link" href="/">
                Menu Item 6
              </a>
            </li>
            <li>
              <a className="sd-link" href="/">
                Menu Item 7
              </a>
            </li>
            <li>
              <a className="sd-link" href="/">
                Menu Item 8
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>
    </>
  );
};

export default SideNavbar;
