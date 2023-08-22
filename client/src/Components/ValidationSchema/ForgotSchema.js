/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const ForgotInitialValue = {
  email: "",
  newPassword: "",
  conPassword: "",
};

export const forgotSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Enter valid Email"),
  newPassword: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
      "Password should be strong"
    )
    .min(8, "Minimum 8 character"),
  conPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("newPassword"), null], "Password doesn't matched"),
});

//CONTACT ABOUT INITIAL VALUE
export const contactInitialValue = {
  email: "",
  comment: "",
};

export const contactSchema = yup.object({
  email: yup
    .string()
    .required("Please enter your email")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Enter valid Email"),
  comment: yup
    .string()
    .required("Feedback is required")
    .min(20, "Feedback should be more than 20 charectors"),
});
