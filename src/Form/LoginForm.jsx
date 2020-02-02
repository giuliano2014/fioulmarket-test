import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Formik, Form } from 'formik';

import './AuthForm.css';

import { formFields } from '../data/loginFormData';
import { loginFormValidationSchema } from './validationSchema';

import GenericInputField from '../Shared/GenericInputField';

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
      {props => (
        <Form>
          <GenericInputField data={formFields} {...props} />
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
