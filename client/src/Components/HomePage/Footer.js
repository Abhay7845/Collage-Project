/** @format */

import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <div>
      <hr className="mx-1" />
      <div className="row my-3 mx-0">
        <div className="col">
          <span className="text-info">© BY ABHAY ARYAN, {CurrentYear}</span>
        </div>
        <div className="col d-flex justify-content-end">
          <ul className="nav list-unstyled d-flex">
            <li>
              <a
                style={{ color: "#171515" }}
                href="https://github.com/Abhay7845"
              >
                <FaGithub size={25} />
              </a>
            </li>
            <li className="mx-2">
              <a
                style={{ color: "red" }}
                href="https://instagram.com/__abhay_aryan?igshid=NGExMmI2YTkyZg=="
              >
                <FaInstagram size={25} />
              </a>
            </li>
            <li className="mx-1">
              <a
                style={{ color: "#3b5998" }}
                href="https://www.facebook.com/hero.a.12979"
              >
                <FaFacebook size={25} />
              </a>
            </li>
            <li className="mx-1">
              <a
                style={{ color: "#FF0000" }}
                href="https://www.youtube.com/channel/UCzgB5kldzKedXQqD0D3NYbQ"
              >
                <FaYoutube size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
