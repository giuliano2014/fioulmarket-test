import * as Yup from "yup";

const emailValidation = Yup.string()
  .email('You have to provide a valid email.')
  .required('Your email is required.');

const passwordValidation = Yup.string()
  .min(5, 'Your password must be between 5 and 16 characters length.')
  .max(16, 'Your password must be between 5 and 16 characters length.')
  .required('Your password is required.');

const confirmPasswordValidation = (password) => Yup.string(password)
.oneOf([Yup.ref(password), null], 'Your confirm password must match with your password.')
.required('Your confirm password is required.');

export const registerFormValidationSchema = Yup.object().shape({
  registerEmail: emailValidation,
  registerPassword: passwordValidation,
  registerConfirmPassword: confirmPasswordValidation('registerPassword'),
});

export const loginFormValidationSchema = Yup.object().shape({
  loginEmail: emailValidation,
  loginPassword: passwordValidation,
});
