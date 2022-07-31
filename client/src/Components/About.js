import React from "react";
import Footer from "./HomePage/Footer";

const About = () => {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-10 col-md-10 mx-auto">
            <h3 className="fw-light">ABOUT US</h3>
            <p className="lead text-muted">
              I am determined to do my part in removing the roadblock of poverty
              from student life. In graduate school and beyond, I look forward
              to using hard data to make radical, positive changes in the
              educational system and to learn from and contribute to the
              existing body of knowledge.
            </p>
          </div>
        </div>
      </section>
      <div className="AboutFooter">
        <Footer />
      </div>
    </>
  );
};

export default About;
