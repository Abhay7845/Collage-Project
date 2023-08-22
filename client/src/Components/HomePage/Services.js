import React, { useState } from "react";
import { ImageList } from "../../Data/DataList";
import { Field, Form, Formik } from "formik";
import ShowError from "../Common/ShowError";
import {
  contactUsInitialValue,
  contactUsSchema,
} from "../ValidationSchema/ContactUs";

const Services = () => {
  const [loading, setLoading] = useState(false);

  const onSendComment = (payload) => {
    console.log("payload==>", payload);
    setLoading(false);
  };

  return (
    <div>
      <div className="container my-5">
        <h4 className="my-3 text-info text-center">
          <b>OUR SERVICES</b>
        </h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {ImageList.map((list, i) => {
            return (
              <div className="col" key={i}>
                <img
                  src={list.imgUrl}
                  className="img-fluid rounded"
                  alt="..."
                />
              </div>
            );
          })}
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-12 g-3 mt-4">
          <div className="col">
            <Formik
              initialValues={contactUsInitialValue}
              validationSchema={contactUsSchema}
              onSubmit={(payload, { resetForm }) => {
                onSendComment(payload);
                resetForm();
              }}
            >
              <Form className="w-100 mx-1">
                <h5 className="text-center my-3">CONTACT WITH US</h5>
                <div>
                  <b>
                    Your Name <span className="text-danger"> *</span>
                  </b>
                  <Field
                    type="text"
                    name="yourName"
                    placeholder="Your Name"
                    className="GInput"
                  />
                  <ShowError name="yourName" />
                </div>
                <div className="my-3">
                  <b>
                    Phone <span className="text-danger"> *</span>
                  </b>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    className="GInput"
                  />
                  <ShowError name="phone" />
                </div>
                <div>
                  <b>
                    Your Message <span className="text-danger"> *</span>
                  </b>
                  <Field
                    as="textarea"
                    name="massage"
                    placeholder="Your Massage"
                    className="GTextArea"
                  />
                  <ShowError name="massage" />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="subscribe-button my-2">
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="sr-only">COMMENT</span>
                    )}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="col border">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
