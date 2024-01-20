/** @format */

import React, { useState } from "react";
import Footer from "./Footer";
import Heading1 from "../../Asset/img/heading1.webp";
import Heading2 from "../../Asset/img/heading2.jpg";
import Heading3 from "../../Asset/img/heading3.jpg";
import SearchEngine from "./SearchEngine";
import { text1, text2, text3 } from "./DefaultText";
import Services from "./Services";

const Home = (props) => {
  const [showMore1, setShowMore1] = useState("");
  const [showMore2, setShowMore2] = useState("");
  const [showMore3, setShowMore3] = useState("");
  return (
    <div>
      <SearchEngine />
      <div className="container">
        <div className="row mt-2">
          <div className="col-lg-4">
            <div className="text-center my-2">
              <img src={Heading1} className="HomeImageStyle" alt="" />
            </div>
            <h6 className="fw-bold">Plagiarism Checking</h6>
            <p className="textJustify">
              {showMore1 ? text1 : `${text1.substring(0, 118)}`}
            </p>
            <div className="d-flex justify-content-end">
              <button
                className="VButton"
                onClick={() => setShowMore1(!showMore1)}
              >
                {showMore1 ? "Hide Details" : "View Details"}
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center my-2">
              <img src={Heading2} className="HomeImageStyle" alt="" />
            </div>
            <h6 className="fw-bold">Writing Enhancements</h6>
            <p className="textJustify">
              {showMore2 ? text2 : `${text2.substring(0, 114)}`}
            </p>
            <div className="d-flex justify-content-end">
              <button
                className="VButton"
                onClick={() => setShowMore2(!showMore2)}
              >
                {showMore2 ? "Hide Details" : "View Details"}
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center my-2">
              <img src={Heading3} className="HomeImageStyle" alt="Heading3" />
            </div>
            <h6 className="fw-bold">Why Use a Plagiarism ?</h6>
            <p className="textJustify">
              {showMore3 ? text3 : `${text3.substring(0, 120)}`}
            </p>
            <div className="d-flex justify-content-end">
              <button
                className="VButton"
                onClick={() => setShowMore3(!showMore3)}
              >
                {showMore3 ? "Hide Details" : "View Details"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
