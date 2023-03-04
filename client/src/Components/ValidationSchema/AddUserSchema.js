/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const addUserInitialValue = {
  name: "",
  occupation: "",
  email: "",
  phone: "",
  postalCode: "",
  address: "",
};

export const addUserSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name Should be Min 3 Character"),
  occupation: yup.string().required("Occupation is required"),
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
  postalCode: yup
    .string()
    .required("Pine Code is required")
    .matches(/^[0-9]{6}(?:-[0-9]{6})?$/, "Not Valid Pine Code"),
  address: yup
    .string()
    .required("Address is required")
    .min(5, "Enter Full Address"),
});
