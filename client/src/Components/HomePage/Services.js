import React, { useState } from "react";
import { ImageList } from "../../Data/DataList";
import { Field, Form, Formik } from "formik";
import L from "leaflet";
import ShowError from "../Common/ShowError";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  contactUsInitialValue,
  contactUsSchema,
} from "../ValidationSchema/ContactUs";
import axios from "axios";
import { HOST_URL } from "../../API/Host";

const Services = (props) => {
  const { showAlert } = props;
  const [loading, setLoading] = useState(false);
  const markerIcon = new L.Icon({
    iconUrl: require("../../Asset/img/Location.png"),
    iconSize: [35, 35],
  });
  const center = [24.518690259537042, 85.09853062939109];
  const ContactUs = (payload) => {
    setLoading(true);
    axios
      .post(`${HOST_URL}/contact/with/us`, payload)
      .then((res) => res)
      .then((response) => {
        if (response.data.success === true) {
          showAlert("Our Team Will Contact Soon", "success");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("error=>", error);
        setLoading(false);
      });
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
                ContactUs(payload);
                resetForm();
              }}
            >
              <Form className="w-100 mx-1">
                <h5 className="text-center">CONTACT WITH US</h5>
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
                    Your Phone<span className="text-danger"> *</span>
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
                    name="message"
                    placeholder="Your Message"
                    className="GTextArea"
                  />
                  <ShowError name="message" />
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
                      <span className="sr-only">SUBMIT</span>
                    )}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="col">
            <h5 className="text-center">OUR LOCATION</h5>
            <MapContainer
              center={center}
              zoom={5.5}
              style={{ width: "100%", height: "88%" }}
            >
              <TileLayer
                url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=yWf5XdnBxBRhEaDUGS2n"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              />
              <Marker icon={markerIcon} position={center}>
                <Popup>
                  <b className="text-primary">
                    Company- The Aryan Company Pvt. Ltd.
                  </b>
                  <br />
                  <b className="text-danger">Owner- Abhay Aryan</b>
                  <br />
                  <b>Gaya (Bihar), 824201, INDIA</b>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
