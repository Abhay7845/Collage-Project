/** @format */

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

const About = (props) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const onSendComment = async (payload) => {
    setLoading(true);
    const { email, comment } = payload;
    let result = await fetch(`${HOST_URL}/subscription`, {
      method: "POST",
      body: JSON.stringify({ email, comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.success) {
      props.showAlert("Thank You For  Support", "success");
      setLoading(false);
    }
  };

  //FETCH USERS COMMENTS
  useEffect(() => {
    axios
      .get(`${HOST_URL}/fetch/comment`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res)
      .then((result) => setComments(result.data.comments));
  }, [comments]);

  const totalComments = comments.length;
  return (
    <div>
      <div className='about-section'>
        <h5>ABOUT US</h5>
        <p>
          We are here for Creating the all those students they can't lear the
          programming language. <br /> then our team will help them to lear easy
          to learn programming <br />
          language and make your professional life.
        </p>
        <div>
          <button className='CButton'>More</button>
        </div>
      </div>
      <div>
        <div className='row mx-0 about-image-row'>
          <div className='col about-image-col'>
            <img src={image} alt='' className='about-image' />
          </div>
          <div className='col about-contact'>
            <Formik
              initialValues={contactInitialValue}
              validationSchema={contactSchema}
              onSubmit={(payload, { resetForm }) => {
                onSendComment(payload);
                resetForm();
              }}>
              <Form className='w-100 mx-1'>
                <h5 className='text-center my-3'>JOIN WITH US</h5>
                <b>
                  Email Address <span className='text-danger'> *</span>
                </b>
                <Field
                  type='text'
                  name='email'
                  placeholder='Email'
                  className='GInput my-2'
                />
                <ShowError name='email' />
                <b>
                  Comment <span className='text-danger'> *</span>
                </b>
                <Field
                  type='text'
                  name='comment'
                  placeholder='Enter your commnet'
                  className='GInput my-2'
                />
                <ShowError name='comment' />
                <div className='d-flex justify-content-end'>
                  <button type='submit' className='subscribe-button my-2'>
                    {loading ? (
                      <span
                        className='spinner-border spinner-border-sm'
                        role='status'
                        aria-hidden='true'
                      />
                    ) : (
                      <span className='sr-only'>COMMENT</span>
                    )}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <p className='mx-2 text-secondary'>
        Comments By Peoples:
        <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
          {totalComments}
        </span>
      </p>
      {comments.length === 0 ? (
        ""
      ) : (
        <div className='mx-2 p-2 my-3 border'>
          {comments.map((item, i) => {
            return (
              <div key={i}>
                <Icon.PersonCircle
                  size={23}
                  className='text-secondary'
                  style={{ marginTop: "-2px" }}
                />
                <b className='mx-2'>{item.email}</b>
                <div className='commentsStyle'>
                  <span className='commentStyle'>
                    <span className='text-secondary'>comment: </span>
                    {item.comment}.
                  </span>
                  <span className='commentDate'>
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
