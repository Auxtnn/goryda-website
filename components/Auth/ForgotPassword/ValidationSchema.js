import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password needs to be a minimum of 8 characters")

    .nullable()
    .required("Required"),
  confirmPassword: Yup.string()
    .min(8, "Password needs to be a minimum of 8 characters")

    .nullable()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Password does not match"),
});
