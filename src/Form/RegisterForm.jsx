import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './AuthForm.css';

import { formFields } from '../data/registerFormData';
import { registerFormValidationSchema } from './validationSchema';

const initialValues = Object.fromEntries(
  formFields.map(e => [e.name, ''])
);

const RegisterForm = () => (
  <div className="AuthForm">
    <Formik
      initialValues={initialValues}
      validationSchema={registerFormValidationSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {formFields.map(({label, name, type}) => (
            <div
              key={label}
              className={`form-item${errors[name] && touched[name] ? ' has-error' : ''}`}
            >
              <label htmlFor={name}>{label}</label>
              <Field id={name} name={name} type={type} />
              <ErrorMessage className="error-message" component="span" name={name} />
            </div>
          ))}
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegisterForm;
