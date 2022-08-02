import React, { useState } from "react";
import Footer from "./Footer";
import Heading1 from "../../Asset/img/heading1.webp";
import Heading2 from "../../Asset/img/heading2.jpg";
import Heading3 from "../../Asset/img/heading3.jpg";

const text1 =
  "Grammarly’s plagiarism checker can detect plagiarism from billions of web pages as well as from ProQuest’s academic databases. Our free plagiarism check will tell you whether or not your text contains duplicate content. Our Premium plagiarism check highlights passages that require citations and gives you the resources you need to properly credit your sources";
const text2 =
  "The plagiarism checker is part of a robust writing app that offers advanced feedback on writing mechanics like grammar and spelling as well as more complex stylistic issues like word choice, conciseness, tone, and more.";
const text3 =
  "You’re working on a paper and you’ve just written a line that seems kind of familiar. Did you read it somewhere while you were researching the topic? If you did, does that count as plagiarism? Now that you’re looking at it, there are a couple of other lines that you know you borrowed from somewhere. You didn’t bother with a citation at the time because you weren’t planning to keep them.";

const Home = () => {
  const [search, setSearch] = useState("");
  const [showMore1, setShowMore1] = useState("");
  const [showMore2, setShowMore2] = useState("");
  const [showMore3, setShowMore3] = useState("");
  const searchData = async () => {
    console.log("search==>", search);
    let BusinessList = await fetch("https://graph.microsoft.com/beta", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await BusinessList.json();
    console.log("response==>", response.value);
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
              placeholder="Search here"
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
          <h5 className="fw-normal">Plagiarism Checking</h5>
          <p>{showMore1 ? text1 : `${text1.substring(0, 115)}`}</p>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-outline-info btn-sm"
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
          <h5 className="fw-normal">Writing Enhancements</h5>
          <p>{showMore2 ? text2 : `${text2.substring(0, 111)}`}</p>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-outline-info btn-sm"
              onClick={() => setShowMore2(!showMore2)}
            >
              {showMore2 ? "Hide Details" : "View Details"}
            </button>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="text-center my-2">
            <img src={Heading3} className="HomeImageStyle" alt="" />
          </div>
          <h5 className="fw-normal">Why Use a Plagiarism ?</h5>
          <p>{showMore3 ? text3 : `${text3.substring(0, 117)}`}</p>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-outline-info btn-sm"
              onClick={() => setShowMore3(!showMore3)}
            >
              {showMore3 ? "Hide Details" : "View Details"}
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
