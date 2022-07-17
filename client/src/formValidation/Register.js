import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is Required"),
  email: yup.string().email("Enter Valid Email").required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
