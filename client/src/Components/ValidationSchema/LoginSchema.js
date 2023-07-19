/** @format */
/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const LoginInitialValue = {
  email: "",
  password: "",
};

export const LoginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Enter valid Email"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
      "Password should be strong"
    )
    .min(8, "Minimum 8 character"),
});
