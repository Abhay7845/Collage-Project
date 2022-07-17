import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is Required"),
  email: yup.string().email("Enter Valid Email").required("Email is Required"),
  password: yup
    .string()
    .required("Password is Required")
    .matches(
      /(?=^.{6,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*$/,
      "Password must be strong, must be a special character",
    ),
});
