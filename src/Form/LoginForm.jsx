import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './AuthForm.css';

import { formFields } from '../data/loginFormData';
import { loginFormValidationSchema } from './validationSchema';

const initialValues = Object.fromEntries(
  formFields.map(e => [e.name, ''])
);

const LoginForm = () => (
  <div className="AuthForm">
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormValidationSchema}
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
          <Navbar>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <a href="#forgottenPassword">Mot de passe oublié ?</a>
              </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
          <button type="submit">Me connecter</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
