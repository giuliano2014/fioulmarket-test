import React from 'react';
import { Formik, Form } from 'formik';

import './AuthForm.css';

import { formFields } from '../data/registerFormData';
import { registerFormValidationSchema } from './validationSchema';

import GenericInputField from '../Shared/GenericInputField';

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
      {props => (
        <Form>
          <GenericInputField data={formFields} {...props} />
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegisterForm;
