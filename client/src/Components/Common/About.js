import React from "react";
import { Field, Form, Formik } from "formik";
import {
  contactInitialValue,
  contactSchema,
} from "../ValidationSchema/ForgotSchema";
import ShowError from "../Common/ShowError";
import Footer from "../HomePage/Footer";
import "../../Components/Style/About.css";
import image from "../../Asset/img/laptop.png";

const About = () => {
  return (
    <>
      <div className="about-section">
        <h5>ABOUT US</h5>
        <p>
          We are here for Creating the all those students they can't lear the
          programming language. <br /> then our team will help them to lear easy
          to learn programming <br />
          language and make your professional life.
        </p>
        <div>
          <button className="CButton">More</button>
        </div>
      </div>
      <div>
        <div className="row mx-0 about-image-row">
          <div className="col about-image-col">
            <img src={image} alt="" className="about-image" />
          </div>
          <div className="col about-contact">
            <Formik
              initialValues={contactInitialValue}
              validationSchema={contactSchema}
              onSubmit={(payload) => {
                console.log("payload==>", payload);
              }}
            >
              <Form>
                <h5 className="text-center my-3">JOIN WITH US</h5>
                <b>Name</b>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name (Optional)"
                  className="GInput my-2"
                />
                <b>
                  Email Address <span className="text-danger"> *</span>
                </b>
                <Field
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="GInput my-2"
                />
                <ShowError name="email" />
                <div className="d-flex justify-content-end">
                  <button type="submit" className="subscribe-button my-2">
                    SUBSCRIBE
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
