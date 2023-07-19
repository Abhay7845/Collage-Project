/** @format */
/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const RegisterInitialValue = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

export const RegisterSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name Should be Min 3 Character"),
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Enter valid Email"),
  phone: yup
    .string()
    .required("Phone is Required")
    .matches(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Not Valid Number"
    ),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
      "Password should be strong"
    )
    .min(8, "Minimum 8 character"),
});
