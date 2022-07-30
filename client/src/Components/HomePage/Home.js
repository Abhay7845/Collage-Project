import React from "react";
import Footer from "./Footer";

const Home = () => {
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
            />
            <span className="searchButton">Search</span>
          </div>
        </div>
      </div>
      <div className="row mx-0 my-4">
        <div className="col-lg-4">
          <div>
            <img
              src="../../Asset/img/background-image.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <h5 className="fw-normal">Heading</h5>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <button className="btn btn-outline-secondary btn-sm">
              View details »
            </button>
          </p>
        </div>
        <div className="col-lg-4">
          <div>
            <img src="" alt="" />
          </div>
          <h5 className="fw-normal">Heading</h5>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <button className="btn btn-outline-secondary btn-sm">
              View details »
            </button>
          </p>
        </div>
        <div className="col-lg-4">
          <div>
            <img src="" alt="" />
          </div>
          <h5 className="fw-normal">Heading</h5>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <button className="btn btn-outline-secondary btn-sm">
              View details »
            </button>
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
