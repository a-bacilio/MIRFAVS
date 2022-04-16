import * as yup from "yup";

const createUserBodyValidator = yup.object({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("An email is needed"),
  password: yup
    .string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,32}$/,"This password needs at least one lower case, one upper case, one number and one of these #?!@$ %^&*-")
    .min(6, "This password needs at least 6 characters")
    .max(32, "This password needs at most 32 characters")
    .required("A password is required"),
  passwordConfirmation: yup
    .string()
    .required("A password confirmation is required")
    .oneOf([yup.ref("password"), null], "password doesnt match"),
});

export const createUserRequestBodyValidator = yup.object({
  body: createUserBodyValidator,
});