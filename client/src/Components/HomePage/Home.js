import React, { useState } from "react";
import Footer from "./Footer";
import Heading1 from "../../Asset/img/heading1.webp";
import Heading2 from "../../Asset/img/heading2.jpg";
import Heading3 from "../../Asset/img/heading3.jpg";

const Home = () => {
  const [search, setSearch] = useState("");
  const searchData = () => {
    console.log("search==>", search);
  };

  return (
    <>
      <div className="row mx-0">
        <div className="col HomeTextStyle">
          <h4 className="text-center textH4Style">
            Find The Perfect Freelance Service <br />
            For Your Business
          </h4>
          <div className="col searchField">
            <input
              type="search"
              className="searchStyle"
              placeholder=" Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="searchButton" onClick={searchData}>
              Search
            </span>
          </div>
        </div>
      </div>
      <div className="row mx-0 my-5">
        <div className="col-lg-4">
          <div className="text-center my-2">
            <img src={Heading1} className="HomeImageStyle" alt="" />
          </div>
          <h5 className="fw-normal">Heading</h5>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-info btn-sm">
              View details
            </button>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="text-center my-2">
            <img src={Heading2} className="HomeImageStyle" alt="" />
          </div>
          <h5 className="fw-normal">Heading</h5>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-info btn-sm">
              View details
            </button>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="text-center my-2">
            <img src={Heading3} className="HomeImageStyle" alt="" />
          </div>
          <h5 className="fw-normal">Heading</h5>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-info btn-sm">
              View details
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
