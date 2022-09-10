import React from "react";
import Footer from "../HomePage/Footer";
import "../../Components/Style/About.css";

const About = () => {
  return (
    <>
      <div className="about-section">
        <h5 className="border-bottom">ABOUT US</h5>
        <p>
          We are here for Creating the all those students they can't lear the
          programming language. <br /> then our team will help them to lear easy
          to learn programming <br />
          language and make professional life.
        </p>
        <div>
          <button className="CButton">More</button>
        </div>
      </div>
      <div>
        <div className="row mx-0">
          <div className="col">col1</div>
          <div className="col">col2</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
