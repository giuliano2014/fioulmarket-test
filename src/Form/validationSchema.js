import * as Yup from "yup";

export const registerFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('You have to provide a valid email.')
    .required('Your email is required.'),
  password: Yup.string()
    .min(5, 'Your password must be between 5 and 16 characters length.')
    .max(16, 'Your password must be between 5 and 16 characters length.')
    .required('Your password is required.'),
  confirmPassword:  Yup.string()
    .oneOf([Yup.ref('password'), null], 'Your confirm password must match with your password.')
    .required('Your confirm password is required.')
});
