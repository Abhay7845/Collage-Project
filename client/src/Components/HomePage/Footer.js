import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <>
      <hr className="mx-2" />
      <div className="row my-3 mx-0">
        <div className="col">
          <span className="text-info">© BY ABHAY ARYAN {CurrentYear}</span>
        </div>
        <div className="Col">
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
              <a style={{ color: "red" }} href="/">
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
