import React from "react";
import { ErrorMessage } from "formik";

const ShowError = ({ name }) => {
  return (
    <div className="text-danger">
      <ErrorMessage name={name} />
    </div>
  );
};

export default ShowError;
