import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import {
  contactInitialValue,
  contactSchema,
} from "../ValidationSchema/ForgotSchema";
import * as Icon from "react-bootstrap-icons";
import ShowError from "../Common/ShowError";
import Footer from "../HomePage/Footer";
import "../../Components/Style/About.css";
import image from "../../Asset/img/laptop.png";
import axios from "axios";
import { HOST_URL } from "../../API/Host";
import { toast } from "react-toastify";

const About = () => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const onSendComment = async (payload) => {
    setLoading(true);
    axios
      .post(`${HOST_URL}/comment`, payload)
      .then((res) => res)
      .then((result) => {
        if (result.data.success === true) {
          toast.success("Thank You For Support", {
            theme: "colored",
            autoClose: 2000,
          });
        }
        setLoading(false);
      })
      .catch((erro) => setLoading(false));
  };

  //FETCH USERS COMMENTS
  useEffect(() => {
    axios
      .get(`${HOST_URL}/fetch/comment`, {})
      .then((res) => res)
      .then((result) => setComments(result.data.comments))
      .catch((error) => {
        setLoading(false);
      });
  }, [comments]);

  const DeleteUserComment = (id) => {
    axios
      .delete(`${HOST_URL}/delete/comment/${id}`)
      .then((res) => res)
      .then((response) => {
        if (response.data.success === true) {
          toast.success("Delete Successfully", {
            theme: "colored",
            autoClose: 2000,
          });
        }
      })
      .catch((error) => setLoading(false));
  };

  return (
    <div>
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
              onSubmit={(payload, { resetForm }) => {
                onSendComment(payload);
                resetForm();
              }}
            >
              <Form className="w-100 mx-1">
                <h5 className="text-center my-3">GIVE YOUR FEEDBACK</h5>
                <b>
                  Email Address <span className="text-danger"> *</span>
                </b>
                <Field
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="GInput"
                />
                <ShowError name="email" />
                <br />
                <b>
                  Your Feedback <span className="text-danger"> *</span>
                </b>
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Enter your Feedback"
                  className="GTextArea"
                />
                <ShowError name="comment" />
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
        </div>
      </div>
      <p className="mx-2 text-secondary">
        Feedback By Peoples:
        <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
          {comments.length}
        </span>
      </p>
      {comments.length === 0 ? (
        ""
      ) : (
        <div className="mx-2 p-2 my-3 border">
          {comments.map((item, i) => {
            return (
              <div key={i}>
                <Icon.PersonCircle
                  size={23}
                  className="text-secondary"
                  style={{ marginTop: "-2px" }}
                />
                <b className="mx-2">{item.email}</b>
                <div className="commentsStyle">
                  <span className="commentStyle">
                    <span className="text-secondary">comment: </span>
                    {item.comment}.
                  </span>
                  <span className="commentDate">
                    <b
                      className="text-danger mx-3"
                      style={{ cursor: "pointer" }}
                      onClick={() => DeleteUserComment(item._id)}
                    >
                      Delete
                    </b>
                    {moment(item.date).format("ll")}
                  </span>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default About;
