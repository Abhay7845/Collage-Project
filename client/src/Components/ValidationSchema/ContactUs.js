/* eslint-disable no-useless-escape */
import * as yup from "yup";

//CONTACT ABOUT INITIAL VALUE
export const contactUsInitialValue = {
  yourName: "",
  phone: "",
  message: "",
};

export const contactUsSchema = yup.object({
  yourName: yup.string().required("Please Enter Your Name"),
  phone: yup
    .string()
    .required("Phone is Required")
    .matches(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Not Valid Number"
    ),
  message: yup
    .string()
    .required("Message is required")
    .min(20, "Message should be more than 20 charectors"),
});
