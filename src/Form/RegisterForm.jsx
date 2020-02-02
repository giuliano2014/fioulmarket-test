import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import './RegisterForm.css';

const RegisterFormSchema = Yup.object().shape({
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

const RegisterForm = () => (
  <div className="RegisterForm">
    <h1>Registration form</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={RegisterFormSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={`form-item${errors.email && touched.email ? ' has-error' : ''}`}>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage className="error-message" component="span" name="email" />
          </div>
          <div className={`form-item${errors.password && touched.password ? ' has-error' : ''}`}>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage className="error-message" component="span" name="password" />
          </div>
          <div className={`form-item${errors.confirmPassword && touched.confirmPassword ? ' has-error' : ''}`}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" type="password" />
            <ErrorMessage className="error-message" component="span" name="confirmPassword" />
          </div>
          <button type="submit">Register !</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegisterForm;
